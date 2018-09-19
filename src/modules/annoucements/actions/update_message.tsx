import { UPDATE_MESSAGE } from '../type';

export const updateMessage = (message: string) => dispatch => {
  return dispatch({ type: UPDATE_MESSAGE, message });
};
