import React, { useState, useEffect, useContext } from 'react'
import dig from 'object-dig';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Styled from 'styled-components';

import { singInWithGoogle } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import * as Api from '../service/api';
import TodoList from './TodoList';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState('');
  const [todos, setTodos] = useState([]);

  const post = () => {
    if (inputName === '') return;
    Api.addTodo(inputName, currentUser.currentUser.uid)
    setInputName('');
    fetch();
  }

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
        <>
          <h2>あなたのTodo</h2>
          <SForm>
            <STextField id="standard-basic" variant="standard" type="text" label='Todo name' onChange={((e) => setInputName(e.target.value))} value={inputName} />
            <SButton variant='contained' type='button' onClick={post} disabled={!inputName} >追加</SButton>
          </SForm>
        </>
      ) : (<button onClick={singInWithGoogle}>ログイン</button>)}
      <TodoList todos={todos} fetch={fetch} />
    </div>
  )
}

export default Dashboard;

const SButton = styled(Button)(({ theme }) => ({
  color: '#fff',
}))
const STextField = styled(TextField)(() => ({
  marginRight: '10px',
}))

const SForm = Styled.form`
  width:100%;
  max-width: 360px;
  margin: 0 auto 40px;
  display: flex;
  align-items: baseline;
  justify-content: center;

`
