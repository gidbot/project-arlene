import firebase from '../config/firebase';
import { MOM_CHANGED, SAVING_MOM, CREATE_MOM } from './types';

export const momChanged = ({ prop, value }) => ({
  type: MOM_CHANGED,
  payload: { prop, value },
});

export const createMom = ({ name, phoneNumber, zipcode }) => {
  const userId = firebase.auth().currentUser.uid;

  // // return (dispatch) => {
  // //   dispatch({ type: SAVING_MOM });
  // //   firebase
  // //     .firestore()
  // //     .collection('moms')
  // //     .add({
  // //       userId,
  // //       name,
  // //       phoneNumber,
  // //       zipcode,
  // //     })
  // //     .then((docRef) => {
  // //       console.log('Document written with ID: ', docRef.id);
  // //     })
  // //     .catch((error) => {
  // //       console.error('Error adding document: ', error);
  // //     });
  // };
};
