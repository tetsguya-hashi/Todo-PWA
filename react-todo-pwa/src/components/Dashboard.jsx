import React, { useState, useEffect, useContext } from 'react'
import dig from 'object-dig';

import { singInWithGoogle } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import * as Api from '../service/api';
import TodoList from './TodoList';
import InputForm from './InputForm';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch();
  }, [currentUser])
  const fetch = async () => {
    if (dig(currentUser, 'currentUser', 'uid')) {
      const dataTodos = await Api.initGet(currentUser.currentUser.uid);
      await setTodos(dataTodos);
      console.log('fetch')
    }
  }

  return (
    <div style={{ marginTop: 104 }}>
      {(dig(currentUser, 'currentUser')) ? (
        <InputForm fetch={fetch} inputName={inputName} setInputName={setInputName} />
      ) : (<button onClick={singInWithGoogle}>ログイン</button>)}
      <TodoList todos={todos} fetch={fetch} />
    </div>
  )
}

export default Dashboard;

