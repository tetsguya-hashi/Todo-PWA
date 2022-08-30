import React, { useState, useEffect, useContext } from 'react'
import dig from 'object-dig';
import { IconButton, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListItemSecondaryAction, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import Styled from 'styled-components';

import { singInWithGoogle } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import * as Api from '../service/api';

const TodoList = ({ todos, fetch }) => {
  const deleteHandler = async (id) => {
    await Api.todoDelete(id);
    fetch();
  }

  return (
    <div>
      <Sul>
        {todos.map((todo) => (
          // <li key={todo.id}>{todo.content}<button onClick={() => { deleteHandler(todo.id) }}>削除</button></li>
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox color="secondary" />
            </ListItemIcon>
            <ListItemText primary={todo.content} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => { deleteHandler(todo.id) }}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </Sul>
    </div>
  )
}

export default TodoList

const Sul = Styled.ul`
  max-width: 350px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`