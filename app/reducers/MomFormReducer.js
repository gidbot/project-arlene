import {
  MOM_CHANGED,
  SAVING_MOM,
  CREATE_MOM,
  MOM_SAVED,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phoneNumber: '',
  zipcode: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOM_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SAVING_MOM:
      return { ...state, loading: true, error: '' };
    case CREATE_MOM:
      return INITIAL_STATE;
    case MOM_SAVED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
