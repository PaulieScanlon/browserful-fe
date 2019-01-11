import { UPDATE_THING } from '../types';

export const updateThing = (thingObject: Object) => dispatch => {
  return dispatch({
    type: UPDATE_THING,
    thingObject
  });
};
