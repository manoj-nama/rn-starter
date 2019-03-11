import {
  FETCH_USERS_FAILED,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS,
} from './user.actionTypes'

import dummyUsers from './dummyUsers';

const fetchUsersStarted = () => ({
  type: FETCH_USERS_STARTED
});

const fetchUsersFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  error
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users
});

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersStarted());
    // Dummy out a fetch request
    setTimeout(() => {
      dispatch(fetchUsersSuccess(dummyUsers));
    }, 3000);
  }
}