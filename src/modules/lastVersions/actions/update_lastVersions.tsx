import { UPDATE_LASTVERSIONS } from '../types';

export const updateLastVersions = (value: string) => dispatch => {
  return dispatch({ type: UPDATE_LASTVERSIONS, value });
};
