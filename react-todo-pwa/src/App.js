import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './service/firebase';

import Router from './router/Router';
import AuthProvider from './providers/AuthProvider';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Router />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

