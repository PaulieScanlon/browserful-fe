import { UPDATE_LASTVERSIONS } from '../types';

export const updateLastVersions = (value: number) => dispatch => {
  return dispatch({ type: UPDATE_LASTVERSIONS, value });
};
