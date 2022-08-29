import React, { useContext } from 'react';
import dig from 'object-dig';

import { AuthContext } from '../providers/AuthProvider';
import { singInWithGoogle, logOut } from '../service/firebase';

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(dig(currentUser, 'currentUser', 'uid'))
  const buttonRebder = () => {
    // let buttonDom;
    // if (dig(currentUser, 'currentUser')) {
    //   buttonDom = <button onClick={logOut}>ログアウト</button>
    // } else {
    //   buttonDom = <button onClick={singInWithGoogle}>ログイン</button>
    // }
    // return buttonDom;
    (dig(currentUser, 'currentUser', 'uid')) ? (<button onClick={logOut}>ログアウト</button>) : (<button onClick={singInWithGoogle}>ログイン</button>);
  }
  return (
    <div>
      <header>
        ヘッダー
        {(dig(currentUser, 'currentUser')) ? (<button onClick={logOut}>ログアウト</button>) : (<button onClick={singInWithGoogle}>ログイン</button>)}
      </header>
    </div>
  )
}

export default Header