import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer as browserlistReducer } from './modules/browserlist/reducers/update_browserlist';
import { reducer as globalUsageReducer } from './modules/globalUsage/reducers/update_globalUsage';
import { reducer as lastVersionsReducer } from './modules/lastVersions/reducers/update_lastVersions';
import { reducer as yearReleasedReducer } from './modules/yearReleased/reducers/update_yearReleased';

export const initStore = initialState => {
  return createStore(
    combineReducers({
      browserlist: browserlistReducer,
      globalUsage: globalUsageReducer,
      lastVersions: lastVersionsReducer,
      yearReleased: yearReleasedReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
