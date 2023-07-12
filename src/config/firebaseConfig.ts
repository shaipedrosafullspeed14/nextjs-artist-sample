import { FirebaseOptions } from 'firebase/app';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
//   measurementId,
//   tenantId,
} = publicRuntimeConfig;

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
//   measurementId,
};

export { firebaseConfig };