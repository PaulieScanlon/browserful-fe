import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer as matrixReducer } from './features/MatrixUi/reducers/MatrixUI';

export const initStore = initialState => {
  return createStore(
    combineReducers({
      matrixUi: matrixReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
