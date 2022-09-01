import { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from '../service/firebase';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUser)
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
