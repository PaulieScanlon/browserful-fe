import {
  UPDATE_QUERY,
  UPDATE_QUERYCOLOUR,
  UPDATE_GLOBALUSAGE,
  UPDATE_YEARRELEASED,
  UPDATE_LASTVERSIONS
} from '../types';

export const updateQuery = (queryType: string) => dispatch => {
  return dispatch({ type: UPDATE_QUERY, queryType });
};

export const updateQueryColour = (queryColour: string) => dispatch => {
  return dispatch({ type: UPDATE_QUERYCOLOUR, queryColour });
};

export const updateGlobalUsage = (globalUsage: number) => dispatch => {
  return dispatch({ type: UPDATE_GLOBALUSAGE, globalUsage });
};

export const updateYearReleased = (yearReleased: number) => dispatch => {
  return dispatch({ type: UPDATE_YEARRELEASED, yearReleased });
};

export const updateLastVersions = (lastVersions: number) => dispatch => {
  return dispatch({ type: UPDATE_LASTVERSIONS, lastVersions });
};
