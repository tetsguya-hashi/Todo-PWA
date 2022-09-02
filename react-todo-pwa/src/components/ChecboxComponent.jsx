import { Checkbox, ListItemIcon } from '@mui/material'
import React, { useState } from 'react'
import { toggleComplete } from '../service/api';

const ChecboxComponent = ({ id, fetch, isComplete, collectionName }) => {
  const [complete, setComplete] = useState(false);


  const checkHandle = async (id, collectionName) => {
    await toggleComplete(id, collectionName);
    fetch();
  }

  return (
    <>
      <ListItemIcon>
        <Checkbox checked={isComplete} color="secondary" onChange={() => { checkHandle(id, collectionName) }} />
      </ListItemIcon>
    </>
  )
}

export default ChecboxComponent