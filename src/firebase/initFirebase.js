import firebase from 'firebase';
import 'firebase/firestore';

import Env from '../../env';

const { firebaseConfig } = Env;

firebase.initializeApp(firebaseConfig);

export const { auth } = firebase;
