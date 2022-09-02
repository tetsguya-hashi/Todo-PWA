import React, { useContext } from 'react'
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Styled from 'styled-components';
import * as Api from '../service/api';

import { AuthContext } from '../providers/AuthProvider';

const InputForm = ({ fetch, inputName, setInputName, collectionName }) => {
  const currentUser = useContext(AuthContext);
  const post = () => {
    if (inputName === '') return;
    Api.addTodo(inputName, currentUser.currentUser.uid, collectionName)
    setInputName('');
    fetch();
  }
  return (
    <>
      <SForm>
        <STextField id="standard-basic" variant="standard" type="text" label='Todo name' onChange={((e) => setInputName(e.target.value))} value={inputName} />
        <SButton variant='contained' type='button' onClick={post} disabled={!inputName} >追加</SButton>
      </SForm>
    </>
  )
}

export default InputForm

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
