import { collection, addDoc, query, orderBy, doc, where, getDocs, deleteDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";

import { db } from './firebase';

export const addTodo = async (content, uid) => {
  await addDoc(collection(db, 'todo'), {
    content: content,
    createdAt: serverTimestamp(),
    isComplete: false,
    uid: uid
  })
}

export const initGet = async (uid) => {
  const todo = await query(collection(db, 'todo'), orderBy('createdAt', 'desc'), where('uid', '==', uid));
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

export const todoDelete = async (id) => {
  await deleteDoc(doc(db, 'todo', id))
}

export const toggleComplete = async (id) => {
  const todo = await doc(db, 'todo', id)
  const docSnap = await getDoc(todo);
  console.log(docSnap.data().isComplete);
  return updateDoc(todo, {
    isComplete: docSnap.data().isComplete ? false : true,
    updateAt: serverTimestamp(),
  })
}