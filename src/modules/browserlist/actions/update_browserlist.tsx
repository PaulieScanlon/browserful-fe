import { UPDATE_BROWSERLIST } from '../types';

export const updateBrowserlist = (filtered: string) => dispatch => {
  return dispatch({ type: UPDATE_BROWSERLIST, filtered });
};
