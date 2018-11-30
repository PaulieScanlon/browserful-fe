import { UPDATE_GLOBALUSAGE } from '../types';

export const updateGlobalUsage = (value: number) => dispatch => {
  return dispatch({ type: UPDATE_GLOBALUSAGE, value });
};
