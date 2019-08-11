import firebase from '../config/firebase';
import {
  MOM_CHANGED,
  FETCHING_MOMS,
  MOMS_FETCH_SUCCESS,
  SAVING_MOM,
  CREATE_MOM
} from './types';

export const momChanged = ({ prop, value }) => ({
  type: MOM_CHANGED,
  payload: { prop, value }
});

export const fetchMoms = ({ userUid }) => {
  return dispatch => {
    dispatch({ type: FETCHING_MOMS });

    const firestore = firebase.firestore();
    firestore
      .collection('moms')
      .where('userUid', '==', userUid)
      .get()
      .then(snapshot => {
        const momsList = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        dispatch({ type: MOMS_FETCH_SUCCESS, payload: momsList });
      });
  };
};

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
