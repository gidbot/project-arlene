import {
  MOM_CHANGED,
  SAVING_MOM,
  SAVE_MOM_SUCCESS,
  SAVE_MOM_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phoneNumber: '',
  zipcode: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOM_CHANGED:
      return {
        ...state,
        error: '',
        [action.payload.prop]: action.payload.value
      };
    case SAVING_MOM:
      return { ...state, loading: true, error: '' };
    case SAVE_MOM_SUCCESS:
      return {
        ...INITIAL_STATE
      };
    case SAVE_MOM_FAIL:
      return {
        ...state,
        error: action.payload,
        password: '',
        loading: false
      };
    default:
      return state;
  }
};
