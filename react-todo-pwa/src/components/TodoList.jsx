import React, { useState, useEffect, useContext } from 'react'
import dig from 'object-dig';
import { IconButton, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Styled from 'styled-components';

import * as Api from '../service/api';
import ChecboxComponent from './ChecboxComponent';

const TodoList = ({ todos, fetch }) => {
  const deleteHandler = async (id) => {
    await Api.todoDelete(id);
    fetch();
  }

  return (
    <div>
      <Sul>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ChecboxComponent id={todo.id} fetch={fetch} isComplete={todo.isComplete} />
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