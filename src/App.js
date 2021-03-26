import React from 'react';
import { useRoutes } from '../src/routes';
import { BrowserRouter as Router} from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';

import './App.css';

function App() {

  const routes = useRoutes();

  return (
    <div className="App">
    
      <Router>
        {routes} 
      </Router>
    </div>
  );
}
export default App;
