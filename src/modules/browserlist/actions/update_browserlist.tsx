import { UPDATE_BROWSERLIST } from '../types';

export const updateBrowserlist = (result: string) => dispatch => {
  return dispatch({ type: UPDATE_BROWSERLIST, result });
};
