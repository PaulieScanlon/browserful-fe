import { UPDATE_GLOBALUSAGE } from '../types';

export const updateGlobalUsage = (value: string) => dispatch => {
  return dispatch({ type: UPDATE_GLOBALUSAGE, value });
};
