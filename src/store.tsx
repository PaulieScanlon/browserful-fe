import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer as announcementReducer } from './modules/annoucements/reducers/update_message';
import { reducer as browserlistReducer } from './modules/browserlist/reducers/update_browserlist';

export const initStore = initialState => {
  return createStore(
    combineReducers({
      announcement: announcementReducer,
      browserlist: browserlistReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
