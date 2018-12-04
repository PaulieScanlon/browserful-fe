import {
  UPDATE_QUERY,
  UPDATE_QUERYCOLOUR,
  UPDATE_GLOBALUSAGE,
  UPDATE_YEARRELEASED,
  UPDATE_LASTVERSIONS
} from '../types';
import { colours } from '../../../theme';

interface IProps {
  queryType: string;
  queryColour: string;
  globalUsage: number;
  yearReleased: number;
  lastVersions: number;
}

const initialState: IProps = {
  queryType: '',
  queryColour: colours.pink,
  globalUsage: 0.2,
  yearReleased: 2015,
  lastVersions: 5
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        queryType: action.queryType
      };

    case UPDATE_QUERYCOLOUR:
      return {
        ...state,
        queryColour: action.queryColour
      };

    case UPDATE_GLOBALUSAGE:
      return {
        ...state,
        globalUsage: action.globalUsage
      };

    case UPDATE_YEARRELEASED:
      return {
        ...state,
        yearReleased: action.yearReleased
      };

    case UPDATE_LASTVERSIONS:
      return {
        ...state,
        lastVersions: action.lastVersions
      };

    default:
      return state;
  }
};