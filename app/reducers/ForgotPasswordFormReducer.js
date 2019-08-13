import {
  SENDING_PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_EMAIL_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  error: '',
  loading: false,
  emailSent: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASSWORD_EMAIL_CHANGED:
      return { ...state, error: '', email: action.payload };
    case SENDING_PASSWORD_RESET:
      return { ...state, loading: true, error: '' };
    case PASSWORD_RESET_SUCCESS:
      return { ...INITIAL_STATE, emailSent: true };
    case PASSWORD_RESET_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
