import {
  LOGIN_USER_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGGING_IN_USER,
  LOGOUT_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_CHANGED:
      return {
        ...state,
        error: '',
        [action.payload.prop]: action.payload.value,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        password: '',
        loading: false,
      };
    case LOGGING_IN_USER:
      return { ...state, loading: true, error: '' };
    case LOGOUT_USER_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
