// initalise app creates the connection between firebase and project

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  initializeFirestore,
  CollectionReference,
  DocumentData,
} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// pass app variable into getFireStore function, db will hold all the
// firestore information

export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
}) // https://github.com/firebase/firebase-js-sdk/issues/6036#issuecomment-1072237987 - fixes database connection not working in production

// Within database, create reference to poems Collection 

export const poemsCollection = collection(db,'poems-db');
