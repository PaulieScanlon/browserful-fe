import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_NAME,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED,
  UPDATE_INC_EXC,
  UPDATE_BROWSER_QUERY,
  UPDATE_COMPARISON_QUERY
} from '../constants';

export const updateQuery = (id: string, checked: boolean) => dispatch => {
  return dispatch({
    type: UPDATE_QUERY,
    id,
    checked
  });
};

export const updateValue = (id: string, value: number) => dispatch => {
  return dispatch({
    type: UPDATE_VALUE,
    id,
    value
  });
};

export const updateName = (matrixName: any) => dispatch => {
  return dispatch({
    type: UPDATE_NAME,
    matrixName
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

export const updateBrowserQuery = (browserQuery: string) => dispatch => {
  return dispatch({
    type: UPDATE_BROWSER_QUERY,
    browserQuery
  });
};

export const updateComparisonQuery = (comparisonQuery: string) => dispatch => {
  return dispatch({
    type: UPDATE_COMPARISON_QUERY,
    comparisonQuery
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
