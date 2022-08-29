import React, { useContext } from 'react';
import dig from 'object-dig';

import { AuthContext } from '../providers/AuthProvider';
import { singInWithGoogle, logOut } from '../service/firebase';

const Header = () => {
  const currentUser = useContext(AuthContext);
  const buttonRebder = () => {
    let buttonDom;
    if (dig(currentUser, 'currentUser')) {
      buttonDom = <button onClick={logOut}>ログアウト</button>
    } else {
      buttonDom = <button onClick={singInWithGoogle}>ログイン</button>
    }
    return buttonDom;
  }
  return (
    <div>
      <header>
        ヘッダー
        {buttonRebder()}
      </header>
    </div>
  )
}

export default Header