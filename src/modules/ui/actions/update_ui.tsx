import { UPDATE_QUERY, UPDATE_VALUE, UPDATE_BROWSERQUERY } from '../types';

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
