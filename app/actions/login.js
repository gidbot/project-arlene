import firebase from '../config/firebase';
import {
  LOGIN_USER_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGGING_IN_USER,
  LOGOUT_USER_SUCCESS,
} from './types';

export const loginUserChanged = ({ prop, value }) => ({
  type: LOGIN_USER_CHANGED,
  payload: { prop, value },
});

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error.message,
  });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGGING_IN_USER });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      loginUserSuccess(dispatch, user);
    })
    .catch((error) => {
      loginUserFail(dispatch, error);
    });
};

export const logoutUser = () => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: LOGOUT_USER_SUCCESS });
    });
};
