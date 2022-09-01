import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './service/firebase';

import Router from './router/Router';

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
