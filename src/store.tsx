import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer as uiReducer } from './modules/ui/reducers/update_ui';

export const initStore = initialState => {
  return createStore(
    combineReducers({
      ui: uiReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
