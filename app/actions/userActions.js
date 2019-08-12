import NavigationService from '../config/NavigationService';
import GLOBALS from '../config/globals';
import firebase from '../config/firebase';
import {
  USER_CHANGED,
  SIGNING_UP_USER,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAIL
} from './types';

export const userChanged = ({ prop, value }) => ({
  type: USER_CHANGED,
  payload: { prop, value }
});

const signUpUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGN_UP_USER_SUCCESS,
    payload: user
  });
  dispatch(NavigationService.navigate('MomCreate'));
};

const signUpUserFail = (dispatch, error) => {
  dispatch({
    type: SIGN_UP_USER_FAIL,
    payload: error
  });
};

const validateFields = ({ zipcode }) => {
  let errors = [];
  if (zipcode.length != GLOBALS.ZIPCODE_LENGTH) {
    errors.push('Zipcode Must Be 5 Digits');
  }
  return errors;
};

const sendToFirebase = (dispatch, { email, password, zipcode }) => {
  dispatch({ type: SIGNING_UP_USER });

  const firestore = firebase.firestore();
  let currentUser;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      currentUser = response.user;
      firestore
        .collection('users')
        .doc(response.user.uid)
        .set({
          email,
          zipcode
        })
        .then(() => {
          signUpUserSuccess(dispatch, currentUser);
        });
    })
    .catch(error => {
      signUpUserFail(dispatch, error.message);
    });
};

export const signUpUser = fields => dispatch => {
  const errors = validateFields(fields);
  if (errors.length == 0) {
    sendToFirebase(dispatch, fields);
  } else {
    signUpUserFail(dispatch, errors.join('\n'));
  }
};
