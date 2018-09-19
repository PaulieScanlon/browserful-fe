import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer as announcementReducer } from './modules/annoucements/reducers/update_message';
// import { reducer as rawDataReducer } from './states/rawData/reducer'

export const initStore = initialState => {
  return createStore(
    combineReducers({
      announcement: announcementReducer
      // rawData: rawDataReducer @TODO see if api calls can then dispatch a store action
      //https://github.com/lexich/redux-api/issues/183
      //https://github.com/kirill-konshin/next-redux-wrapper/issues/64
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
