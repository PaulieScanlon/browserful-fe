import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer as browserlistReducer } from './modules/browserlist/reducers/update_browserlist';
import { reducer as uiReducer } from './modules/ui/reducers/update_ui';

export const initStore = initialState => {
  return createStore(
    combineReducers({
      browserlist: browserlistReducer,
      ui: uiReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
