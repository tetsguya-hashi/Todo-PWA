import { collection, addDoc, query, orderBy, doc, where, getDocs, deleteDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";

import { db } from './firebase';

export const addTodo = async (content, uid, collectionName = 'todo') => {
  await addDoc(collection(db, collectionName), {
    content: content,
    createdAt: serverTimestamp(),
    isComplete: false,
    uid: uid
  })
}

export const initGet = async (uid, collectionName = 'todo') => {
  const todo = await query(collection(db, collectionName), orderBy('createdAt', 'desc'), where('uid', '==', uid));
  const querySnapshot = await getDocs(todo);

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

export const todoDelete = async (id, collectionName = 'todo') => {
  await deleteDoc(doc(db, collectionName, id))
}

export const toggleComplete = async (id, collectionName = 'todo') => {
  const todo = await doc(db, collectionName, id)
  const docSnap = await getDoc(todo);
  console.log(docSnap.data());
  return updateDoc(todo, {
    isComplete: docSnap.data().isComplete ? false : true,
    updateAt: serverTimestamp(),
  })
}