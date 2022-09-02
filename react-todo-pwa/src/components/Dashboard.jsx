import React, { useState, useEffect, useContext } from 'react'
import dig from 'object-dig';

import { singInWithGoogle } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import * as Api from '../service/api';
import TodoList from './TodoList';
import InputForm from './InputForm';
import Nav from './Nav';

const Dashboard = ({ collectionName }) => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch();
  }, [currentUser])
  const fetch = async () => {
    if (dig(currentUser, 'currentUser', 'uid')) {
      const dataTodos = await Api.initGet(currentUser.currentUser.uid, collectionName);
      await setTodos(dataTodos);
      console.log('fetch')
    }
  }

  return (
    <div style={{ marginTop: 104 }}>
      <Nav />
      {(dig(currentUser, 'currentUser')) ? (
        <InputForm fetch={fetch} inputName={inputName} setInputName={setInputName} collectionName={collectionName} />
      ) : (<button onClick={singInWithGoogle}>ログイン</button>)}
      <TodoList todos={todos} fetch={fetch} collectionName={collectionName} />
    </div>
  )
}

export default Dashboard;

