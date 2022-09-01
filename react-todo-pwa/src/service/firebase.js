import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export default firebaseApp; const provider = new GoogleAuthProvider();
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

enableIndexedDbPersistence(db); //オフライン時の管理


export const singInWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider).then((res) => {
    console.log(`ユーザー：${res.user}`);
  }).catch((error) => {
    console.log(error.message);
  });
}
export const logOut = () => {
  const auth = getAuth();
  signOut(auth).then((res) => {
    console.log(res.user);
    document.location.reload();
  }).catch((error) => {
    console.log(error.message);
  });
}