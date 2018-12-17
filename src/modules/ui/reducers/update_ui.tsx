import { createMatrix } from '../../../utils/createMatrix';
import { arrayAdd } from '../../../utils/arrayAdd';
import { arrayRemove } from '../../../utils/arrayRemove';

import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_BROWSERQUERY,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED
} from '../types';
import { colours } from '../../../theme';

import { queryTypes } from '../../../utils/queryStrings';
import { queryBuilder } from '../../../utils/queryBuilder';
import { config } from '../../../features/ControlCards/config';

interface IProps {
  queryType: string;
  queryColour: string;
  globalUsage: number;
  yearReleased: number;
  lastVersions: number;
  browserQuery: string;
  browserList: any;
  incQuery: Array<String>;
  excQuery: Array<String>;
}

const initialState: IProps = {
  queryType: '',
  queryColour: colours.pink,
  globalUsage: config[queryTypes.GLOBAL_USAGE].slider.defaultValue,
  yearReleased: config[queryTypes.YEAR_RELEASED].slider.defaultValue,
  lastVersions: config[queryTypes.LAST_VERSIONS].slider.defaultValue,
  browserQuery: '',
  browserList: [],
  incQuery: [],
  excQuery: []
};

export const reducer = (state = initialState, action) => {
  // console.log('action.type: ', action.type);
  // console.log('action.queryType: ', action.queryType);
  // console.log('action.queryColour: ', action.queryColour);
  // console.log('action.value: ', action.value);
  // console.log('action.incQuery: ', action.incQuery);
  // console.log('action.excQuery: ', action.excQuery);
  // console.log('');
  // console.log('state', state);
  // console.log('state.queryType: ', state.queryType);
  // console.log('state.value: ', state[state.queryType]);
  // console.log('');

  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        queryType: action.queryType,
        queryColour: action.queryColour
      };

    case UPDATE_VALUE:
      return {
        ...state,
        [action.queryType]: action.value
      };

    case UPDATE_BROWSERQUERY:
      return {
        ...state,
        browserQuery: queryBuilder(
          action.queryType,
          action.value,
          action.incQuery,
          action.excQuery
        ),
        browserList: createMatrix(
          queryBuilder(
            action.queryType,
            action.value,
            action.incQuery,
            action.excQuery
          ),
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
        ),
        browserList: createMatrix(
          queryBuilder(
            state.queryType,
            state[state.queryType],
            arrayRemove(action.incQuery, action.query),
            arrayRemove(action.excQuery, action.query)
          ),
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
        ),
        browserList: createMatrix(
          queryBuilder(
            state.queryType,
            state[state.queryType],
            arrayAdd(action.incQuery, action.query),
            arrayRemove(action.excQuery, action.query)
          ),
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
        ),
        browserList: createMatrix(
          queryBuilder(
            state.queryType,
            state[state.queryType],
            arrayRemove(action.incQuery, action.query),
            arrayAdd(action.excQuery, action.query)
          ),
          arrayRemove(action.incQuery, action.query),
          arrayAdd(action.excQuery, action.query)
        )
      };

    default:
      return state;
  }
};
