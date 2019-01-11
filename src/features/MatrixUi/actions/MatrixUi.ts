import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED,
  UPDATE_INC_EXC
} from '../types';

export const updateQuery = (queryType: string) => dispatch => {
  return dispatch({
    type: UPDATE_QUERY,
    queryType
  });
};

export const updateValue = (queryType: string, value: number) => dispatch => {
  return dispatch({
    type: UPDATE_VALUE,
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

export const updateIncExc = (
  incQuery: Array<String>,
  excQuery: Array<String>
) => dispatch => {
  return dispatch({
    type: UPDATE_INC_EXC,
    incQuery,
    excQuery
  });
};
