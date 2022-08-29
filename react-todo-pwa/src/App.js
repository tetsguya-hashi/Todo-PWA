import React, { useContext } from 'react';
import './App.css';
import './service/firebase';

import Header from './components/Header';
import { AuthProvider } from './providers/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
      </AuthProvider>
    </div>
  );
}

export default App;
