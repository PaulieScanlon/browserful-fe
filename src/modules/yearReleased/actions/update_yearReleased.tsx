import { UPDATE_YEARRELEASED } from '../types';

export const updateYearReleased = (value: string) => dispatch => {
  return dispatch({ type: UPDATE_YEARRELEASED, value });
};
