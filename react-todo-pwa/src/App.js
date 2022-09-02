import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './service/firebase';

import Router from './router/Router';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

