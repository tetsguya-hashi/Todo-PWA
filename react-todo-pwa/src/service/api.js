import { async } from "@firebase/util";
import firebase from "firebase/compat/app"; //v8
import { collection, addDoc, query, orderBy, doc, where, getDocs, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore";

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
    createdAt: serverTimestamp(),
    isComplete: false,
    uid: uid
  })
}

export const initGet = async (uid) => {
  // const todo = await db
  //   .collection('todo')
  //   .orderBy('createdAt', 'desc')
  //   .where('uid', '==', uid);
  const todo = await query(collection(db, 'todo'), orderBy('createdAt', 'desc'), where('uid', '==', uid));
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

export const todoDelete = async (id) => {
  // db.collection('todo').doc(id).delete(); //8
  await deleteDoc(doc(db, 'todo', id))
}

export const toggleComplete = async (id) => {
  // const todo = await db.collection('todo').doc(id).get(); //v8
  const todo = await doc(db, 'todo', id)
  // return db.collection('todo').doc(id).update({ //v8
  console.log(todo)
  return updateDoc(todo, {
    isComplete: todo.isComplete ? false : true,
    // updateAt: firebase.firestore.FieldValue.serverTimestamp(), //v8
    updateAt: serverTimestamp(), //v9
  })
}