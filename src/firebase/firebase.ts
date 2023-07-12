import { initializeApp, FirebaseApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';

const createFirebaseInstance = (): FirebaseApp => {
  const firebase: FirebaseApp = initializeApp(firebaseConfig);
  return firebase;
};

export default createFirebaseInstance;