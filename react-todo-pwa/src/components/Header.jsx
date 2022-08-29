import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { sinInWithGoogle } from '../service/firebase'

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <header>
        ヘッダー
        <button onClick={sinInWithGoogle}>ログイン</button>
      </header>
    </div>
  )
}

export default Header