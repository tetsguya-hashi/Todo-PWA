import firebase from "firebase";
import { db } from './firebase';

export const addTodo = (content, uid) => {
  db.collection('todo').add({
    content: "test",
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    isComplete: false,
    uid: ""
  })
}