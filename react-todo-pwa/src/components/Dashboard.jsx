import React, { useState, useEffect, useContext } from 'react'
import dig from 'object-dig';

import { singInWithGoogle } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);

  return (
    <div>
      {(dig(currentUser, 'currentUser')) ? (
        <form>
          <input type="text" placeholder='Todo name' />
          <button>追加</button>
        </form>
      ) : (<button onClick={singInWithGoogle}>ログイン</button>)}
    </div>
  )
}

export default Dashboard