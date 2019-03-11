import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './rootReducer';

const middlewares = [
  thunkMiddleware
];

export default createStore(reducers, applyMiddleware(...middlewares));