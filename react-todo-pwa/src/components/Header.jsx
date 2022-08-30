import React, { useContext } from 'react';
import dig from 'object-dig';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import { AuthContext } from '../providers/AuthProvider';
import { singInWithGoogle, logOut } from '../service/firebase';

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(dig(currentUser, 'currentUser', 'uid'))
  // const buttonRebder = () => {
  //   (dig(currentUser, 'currentUser', 'uid')) ? (<Button onClick={logOut}>ログアウト</Button>) : (<Button variant="contained" onClick={singInWithGoogle}>ログイン</Button>);
  // }
  return (
    <div>
      <AppBar postion='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' position='static'>
            ReactTodoPWA
          </Typography>
          {(dig(currentUser, 'currentUser')) ? (<Button variant="outlined" color="inherit" onClick={logOut}>ログアウト</Button>) : (<Button variant='inherit' onClick={singInWithGoogle}>ログイン</Button>)}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header