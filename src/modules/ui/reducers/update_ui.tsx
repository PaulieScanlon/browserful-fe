import {
  UPDATE_QUERY,
  UPDATE_GLOBALUSAGE,
  UPDATE_YEARRELEASED,
  UPDATE_LASTVERSIONS
} from '../types';

interface IProps {
  queryType: string;
  globalUsage: number;
  yearReleased: number;
  lastVersions: number;
}

const initialState: IProps = {
  queryType: '',
  globalUsage: 0.01,
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
