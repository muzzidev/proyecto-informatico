import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './ejercicios/13 - 19/13.jsx';
import Nav from './ejercicios/13 - 19/14.jsx';
import H1 from './ejercicios/13 - 19/15.jsx';

import whatsoup from './assets/whatsoup.png'

function App() {
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li><Link to="/ejercicio13">Ejercicio 13</Link></li>
            <li><Link to="/ejercicio14">Ejercicio 14</Link></li>
            <li><Link to="/ejercicio15">Ejercicio 15</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/ejercicio13" element={<Header logo={whatsoup} nombre="Whatsoup"></Header>} />
          <Route path="/ejercicio14" element={<Nav />} />
          <Route path="/ejercicio15" element={<H1 />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
