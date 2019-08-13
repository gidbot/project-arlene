import NavigationService from '../config/NavigationService';
import firebse from '../config/firebase';
import {
  SENDING_PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_EMAIL_CHANGED
} from './types';

export const emailChanged = ({ value }) => ({
  type: PASSWORD_EMAIL_CHANGED,
  payload: value
});

export const sendPasswordReset = ({ email }) => dispatch => {
  dispatch({ type: SENDING_PASSWORD_RESET });

  firebse
    .auth()
    .sendPasswordResetEmail(email)
    .then(_response => {
      dispatch({ type: PASSWORD_RESET_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: PASSWORD_RESET_FAIL, payload: error.message });
    });
};

export const passwordResetCompleted = () => dispatch => {
  NavigationService.goBack();
};
