import { IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Styled from 'styled-components';

import * as Api from '../service/api';
import ChecboxComponent from './ChecboxComponent';

const TodoList = ({ todos, fetch, collectionName }) => {
  const deleteHandler = async (id) => {
    await Api.todoDelete(id, collectionName);
    fetch();
  }
  return (
    <div>
      <Sul>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ChecboxComponent id={todo.id} fetch={fetch} isComplete={todo.isComplete} collectionName={collectionName} />
            {todo.isComplete ?
              <ListItemText primary={todo.content} sx={{ textDecoration: 'line-through', opacity: 0.5, overflowWrap: 'break-word' }} /> :
              <ListItemText primary={todo.content} sx={{ overflowWrap: 'break-word' }} />
            }
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