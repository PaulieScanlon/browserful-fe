import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED,
  UPDATE_INC_EXC,
  UPDATE_BROWSER_QUERY
} from '../constants';

import { queryParams } from '../../../utils/queryUtils/enums';
import { queryBuilder } from '../../../utils/queryUtils/queryBuilder';
import { arrayAdd } from '../../../utils/arrayUtils/arrayAdd';
import { arrayRemove } from '../../../utils/arrayUtils/arrayRemove';

import { config } from '../config/sliderControls.config';

import { IProps } from '../types';

const initialState: IProps = {
  queryType: queryParams.LAST_VERSIONS,
  [queryParams.LAST_VERSIONS]:
    config[queryParams.LAST_VERSIONS].slider.defaultValue,
  [queryParams.GLOBAL_USAGE]:
    config[queryParams.GLOBAL_USAGE].slider.defaultValue,
  [queryParams.YEAR_RELEASED]:
    config[queryParams.YEAR_RELEASED].slider.defaultValue,
  browserQuery: queryBuilder(
    queryParams.LAST_VERSIONS,
    config[queryParams.LAST_VERSIONS].slider.defaultValue,
    [''],
    ['']
  ),
  incQuery: [''],
  excQuery: ['']
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        queryType: action.queryType
      };
    case UPDATE_VALUE:
      return {
        ...state,
        [action.queryType]: action.value
      };

    case UPDATE_BROWSER_QUERY:
      return {
        ...state,
        browserQuery: action.browserQuery
      };

    case UPDATE_AUTO:
      return {
        ...state,
        incQuery: arrayRemove(action.incQuery, action.query),
        excQuery: arrayRemove(action.excQuery, action.query)
      };

    case UPDATE_INCLUDED:
      return {
        ...state,
        incQuery: arrayAdd(action.incQuery, action.query),
        excQuery: arrayRemove(action.excQuery, action.query)
      };

    case UPDATE_EXCLUDED:
      return {
        ...state,
        excQuery: arrayAdd(action.excQuery, action.query),
        incQuery: arrayRemove(action.incQuery, action.query)
      };

    case UPDATE_INC_EXC:
      return {
        ...state,
        incQuery: action.incQuery,
        excQuery: action.excQuery
      };
    default:
      return state;
  }
};
