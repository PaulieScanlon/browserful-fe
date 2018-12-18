import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_BROWSERQUERY,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED,
  UPDATE_INC_EXC_QUERY
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
  value: number,
  incQuery: Array<String>,
  excQuery: Array<String>
) => dispatch => {
  return dispatch({
    type: UPDATE_BROWSERQUERY,
    queryType,
    value,
    incQuery,
    excQuery
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

export const updateIncExcQuery = (
  incQuery: Array<String>,
  excQuery: Array<String>
) => dispatch => {
  return dispatch({
    type: UPDATE_INC_EXC_QUERY,
    incQuery,
    excQuery
  });
};
