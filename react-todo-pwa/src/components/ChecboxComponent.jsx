import { Checkbox, ListItemIcon } from '@mui/material'
import React, { useState } from 'react'
import { toggleComplete } from '../service/api';

const ChecboxComponent = ({ id, fetch, isComplete }) => {
  const [complete, setComplete] = useState(false);


  const checkHandle = async (id) => {
    await toggleComplete(id);
    fetch();
  }

  return (
    <>
      <ListItemIcon>
        <Checkbox checked={isComplete} color="secondary" onChange={() => { checkHandle(id) }} />
      </ListItemIcon>
    </>
  )
}

export default ChecboxComponent