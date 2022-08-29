import React, { useState, useEffect, useContext } from 'react'
import dig from 'object-dig';

import { singInWithGoogle } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import * as Api from '../service/api';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState('');
  const [todos, setTodos] = useState([]);

  const post = () => {
    Api.addTodo(inputName, currentUser.currentUser.uid)
    setInputName('');
  }

  useEffect(() => {
    fecht();
  }, [currentUser])
  const fecht = async () => {
    if (dig(currentUser, 'currentUser', 'uid')) {
      const dataTodos = await Api.initGet(currentUser.currentUser.uid);
      await setTodos(dataTodos);
    }
  }

  return (
    <div>
      {(dig(currentUser, 'currentUser')) ? (
        <form>
          <input type="text" placeholder='Todo name' onChange={((e) => setInputName(e.target.value))} value={inputName} />
          <button type='button' onClick={post}>追加</button>
        </form>
      ) : (<button onClick={singInWithGoogle}>ログイン</button>)}
    </div>
  )
}

export default Dashboard