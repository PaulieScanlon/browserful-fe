import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_BROWSERQUERY,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED
} from '../types';

export const updateQuery = (
  queryType: string,
  queryColour: string
) => dispatch => {
  return dispatch({ type: UPDATE_QUERY, queryType, queryColour });
};

export const updateValue = (queryType: string, value: number) => dispatch => {
  return dispatch({
    type: UPDATE_VALUE,
    queryType,
    value
  });
};

export const updateBrowserQuery = (
  queryType: string,
  value: number
) => dispatch => {
  return dispatch({
    type: UPDATE_BROWSERQUERY,
    queryType,
    value
  });
};

export const updateAuto = (
  incQuery: Array<String>,
  excQuery: Array<String>,
  query: string
) => dispatch => {
  return dispatch({
    type: UPDATE_AUTO,
    incQuery,
    excQuery,
    query
  });
};

export const updateIncluded = (
  incQuery: Array<String>,
  excQuery: Array<String>,
  query: string
) => dispatch => {
  return dispatch({
    type: UPDATE_INCLUDED,
    incQuery,
    excQuery,
    query
  });
};

export const updateExcluded = (
  incQuery: Array<String>,
  excQuery: Array<String>,
  query: string
) => dispatch => {
  return dispatch({
    type: UPDATE_EXCLUDED,
    incQuery,
    excQuery,
    query
  });
};
