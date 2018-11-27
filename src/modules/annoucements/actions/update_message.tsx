import { UPDATE_MESSAGE } from '../types';

export const updateMessage = (message: string) => dispatch => {
  return dispatch({ type: UPDATE_MESSAGE, message });
};
