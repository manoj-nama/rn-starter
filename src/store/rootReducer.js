import { combineReducers } from 'redux';

import UserReducer from '../users/users.reducer';

export default combineReducers({
  users: UserReducer
});