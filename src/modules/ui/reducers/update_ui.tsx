import browserslist from 'browserslist';
import { createMatrix } from '../../../utils/createMatrix';

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
  tempList: object;
}

const initialState: IProps = {
  queryType: '',
  queryColour: colours.pink,
  globalUsage: config[queryTypes.GLOBAL_USAGE].slider.defaultValue,
  yearReleased: config[queryTypes.YEAR_RELEASED].slider.defaultValue,
  lastVersions: config[queryTypes.LAST_VERSIONS].slider.defaultValue,
  browserQuery: queryBuilder(
    queryTypes.GLOBAL_USAGE,
    config[queryTypes.GLOBAL_USAGE].slider.defaultValue
  ),
  browserList: createMatrix(
    browserslist(
      queryBuilder(
        queryTypes.GLOBAL_USAGE,
        config[queryTypes.GLOBAL_USAGE].slider.defaultValue
      )
    )
  ),
  tempList: {}
};

export const reducer = (state = initialState, action) => {
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
        browserQuery: queryBuilder(action.queryType, action.value),
        browserList: createMatrix(
          browserslist(queryBuilder(action.queryType, action.value))
        )
      };

    case UPDATE_AUTO:
      return {
        ...state,
        // TODO remove it if it's been added already
        tempList: action.browser
      };

    case UPDATE_INCLUDED:
      return {
        ...state,
        // TODO add it to the included list
        tempList: action.browser
      };

    case UPDATE_EXCLUDED:
      return {
        ...state,
        // TODO add it to the excluded list
        tempList: action.browser
      };

    default:
      return state;
  }
};
