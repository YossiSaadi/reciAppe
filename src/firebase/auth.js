import { auth } from './initFirebase';

export const authSignInWithEmailAndPassword = ({email, password}) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const authCreateUserWithEmailAndPassword = ({email, password}) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

