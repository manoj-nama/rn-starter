import {
  FETCH_USERS_FAILED,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS
} from './user.actionTypes'

const initialState = {
  list: [],
  error: null,
  loading: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_STARTED: {
      return { ...state, loading: true };
    }
    case FETCH_USERS_SUCCESS: {
      return { ...state, loading: false, list: action.users };
    }
    case FETCH_USERS_FAILED: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
}
