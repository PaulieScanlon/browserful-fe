import { UPDATE_YEARRELEASED } from '../types';

export const updateYearReleased = (value: number) => dispatch => {
  return dispatch({ type: UPDATE_YEARRELEASED, value });
};
