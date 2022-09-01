// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app" //v9
import 'firebase/compat/auth';
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //v9
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export default app;

// const googleProbider = new firebase.auth.GoogleAuthProvider(); //v8
const provider = new GoogleAuthProvider(); //v9
// export const auth = firebase.auth(); //v8
export const auth = getAuth(app); //v9
export const db = firebase.firestore();

db.enablePersistence();


export const singInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    })
}
export const logOut = () => {
  firebase.auth().signOut()
    .then((res) => {
      console.log(res.user);
      document.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    })
}