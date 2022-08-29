import React, { useContext } from 'react';
import './App.css';
import './service/firebase';

import Header from './components/Header';
import { AuthProvider } from './providers/AuthProvider';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Dashboard />
      </AuthProvider>
    </div>
  );
}

export default App;
