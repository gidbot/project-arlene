import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MomFormReducer from './MomFormReducer';
import SignUpFormReducer from './SignUpFormReducer';

export default combineReducers({
  auth: AuthReducer,
  momForm: MomFormReducer,
  signUpForm: SignUpFormReducer
});
