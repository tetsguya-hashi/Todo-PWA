import firebase from "firebase";
import { db } from './firebase';

export const addTodo = (content, uid) => {
  db.collection('todo').add({
    content: content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    isComplete: false,
    uid: uid
  })
}

export const initGet = async (uid) => {
  const todo = await db
    .collection('todo')
    .orderBy('createdAt', 'desc')
    .where('uid', '==', uid);

  return todo.get().then((snapShot) => {
    let todos = [];
    snapShot.forEach((doc) => {
      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete
      });
    });
    return todos;
  });
}