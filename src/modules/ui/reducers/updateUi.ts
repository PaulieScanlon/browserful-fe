import { arrayAdd } from '../../../utils/array-utils/arrayAdd';
import { arrayRemove } from '../../../utils/array-utils/arrayRemove';

import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_BROWSERQUERY,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED,
  UPDATE_INC_EXC_QUERY,
  UPDATE_THING
} from '../types';

import { queryParams } from '../../../utils/query-utils/enums';
import { queryBuilder } from '../../../utils/query-utils/queryBuilder';
import { config } from '../../../features/SliderControls/config';
interface IProps {
  queryType: string;
  globalUsage: number;
  yearReleased: number;
  lastVersions: number;
  browserQuery: string;
  incQuery: Array<String>;
  excQuery: Array<String>;

  thingObject: {
    [queryParams.QUERY_TYPE]: string;
    [queryParams.LAST_VERSIONS]: number;
    [queryParams.YEAR_RELEASED]: number;
    [queryParams.GLOBAL_USAGE]: number;
    browserQuery: string;
    incq: Array<String>;
    excq: Array<String>;
  };
}

const initialState: IProps = {
  queryType: '',
  globalUsage: config[queryParams.GLOBAL_USAGE].slider.defaultValue,
  yearReleased: config[queryParams.YEAR_RELEASED].slider.defaultValue,
  lastVersions: config[queryParams.LAST_VERSIONS].slider.defaultValue,
  browserQuery: '',
  incQuery: [],
  excQuery: [],

  thingObject: {
    [queryParams.QUERY_TYPE]: '',
    [queryParams.LAST_VERSIONS]:
      config[queryParams.LAST_VERSIONS].slider.defaultValue,
    [queryParams.YEAR_RELEASED]:
      config[queryParams.YEAR_RELEASED].slider.defaultValue,
    [queryParams.GLOBAL_USAGE]:
      config[queryParams.GLOBAL_USAGE].slider.defaultValue,
    browserQuery: '',
    incq: [],
    excq: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THING:
      console.log(action.thingObject);
      return {
        ...state,
        thingObject: action.thingObject
      };

    case UPDATE_QUERY:
      return {
        ...state,
        queryType: action.queryType,
        browserQuery: queryBuilder(
          action.queryType,
          state[action.queryType],
          state.incQuery,
          state.excQuery
        )
      };

    case UPDATE_VALUE:
      return {
        ...state,
        [action.queryType]: action.value,
        browserQuery: queryBuilder(
          state.queryType,
          action.value,
          state.incQuery,
          state.excQuery
        )
      };

    case UPDATE_BROWSERQUERY:
      return {
        ...state,
        browserQuery: queryBuilder(
          action.queryType,
          action.value,
          action.incQuery,
          action.excQuery
        )
      };

    case UPDATE_AUTO:
      return {
        ...state,
        incQuery: arrayRemove(action.incQuery, action.query),
        excQuery: arrayRemove(action.excQuery, action.query),
        browserQuery: queryBuilder(
          state.queryType,
          state[state.queryType],
          arrayRemove(action.incQuery, action.query),
          arrayRemove(action.excQuery, action.query)
        )
      };

    case UPDATE_INCLUDED:
      return {
        ...state,
        incQuery: arrayAdd(action.incQuery, action.query),
        excQuery: arrayRemove(action.excQuery, action.query),
        browserQuery: queryBuilder(
          state.queryType,
          state[state.queryType],
          arrayAdd(action.incQuery, action.query),
          arrayRemove(action.excQuery, action.query)
        )
      };

    case UPDATE_EXCLUDED:
      return {
        ...state,
        excQuery: arrayAdd(action.excQuery, action.query),
        incQuery: arrayRemove(action.incQuery, action.query),
        browserQuery: queryBuilder(
          state.queryType,
          state[state.queryType],
          arrayRemove(action.incQuery, action.query),
          arrayAdd(action.excQuery, action.query)
        )
      };

    case UPDATE_INC_EXC_QUERY:
      return {
        ...state,
        incQuery: action.incQuery,
        excQuery: action.excQuery
      };

    default:
      return state;
  }
};
