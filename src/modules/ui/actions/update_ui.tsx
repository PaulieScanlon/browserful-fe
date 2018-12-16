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

export const updateAuto = (browser: string) => dispatch => {
  return dispatch({
    type: UPDATE_AUTO,
    browser
  });
};

export const updateIncluded = (browser: string) => dispatch => {
  return dispatch({
    type: UPDATE_INCLUDED,
    browser
  });
};

export const updateExcluded = (browser: string) => dispatch => {
  return dispatch({
    type: UPDATE_EXCLUDED,
    browser
  });
};
