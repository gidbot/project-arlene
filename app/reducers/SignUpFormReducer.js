import {
  USER_CHANGED,
  SIGNING_UP_USER,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  zipcode: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_CHANGED:
      return {
        ...state,
        error: '',
        [action.payload.prop]: action.payload.value
      };
    case SIGN_UP_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload
      };
    case SIGN_UP_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        password: '',
        loading: false
      };
    case SIGNING_UP_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
