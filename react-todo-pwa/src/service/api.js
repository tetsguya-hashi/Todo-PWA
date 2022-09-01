import firebase from "firebase/compat/app"; //v8
import { collection, addDoc, query, orderBy, doc, where, getDocs, deleteDoc } from "firebase/firestore";

import { db } from './firebase';

export const addTodo = async (content, uid) => {
  // db.collection('todo').add({
  //   content: content,
  //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   isComplete: false,
  //   uid: uid
  // })
  await addDoc(collection(db, 'todo'), {
    content: content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    isComplete: false,
    uid: uid
  })
}

export const initGet = async (uid) => {
  // const todo = await db
  //   .collection('todo')
  //   .orderBy('createdAt', 'desc')
  //   .where('uid', '==', uid);
  const todo = await query(collection(db, 'todo'), where('uid', '==', uid));
  const querySnapshot = await getDocs(todo);

  // return todo.get().then((snapShot) => {
  return (() => {
    console.log(`snapshot get`)
    let todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete
      });
    });
    return todos;
  });
}

export const todoDelete = (id) => {
  db.collection('todo').doc(id).delete();
}

export const toggleComplete = async (id) => {
  const todo = await db.collection('todo').doc(id).get();
  return db.collection('todo').doc(id).update({
    isComplete: todo.data().isComplete ? false : true,
    updateAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
}