import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './ejercicios/13 - 19/13.jsx';
import Nav from './ejercicios/13 - 19/14.jsx';
import H1 from './ejercicios/13 - 19/15.jsx';
import Prod from './ejercicios/13 - 19/16.jsx';
import Pokemon from './ejercicios/20 - 29/23.jsx';
import Trivia from './ejercicios/20 - 29/29.jsx';
import Todo from './ejercicios/Todo.jsx';

import warcraft from './assets/warcraft.png'
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
            <li><Link to="/ejercicio16">Ejercicio 16</Link></li>
            <li><Link to="/ejercicio23">Ejercicio 23</Link></li>
            <li><Link to="/ejercicio29">Ejercicio 29</Link></li>
            <li><Link to="/Todo">Todo app</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/ejercicio13" element={<Header logo={whatsoup} nombre="Whatsoup"></Header>} />
          <Route path="/ejercicio14" element={<Nav />} />
          <Route path="/ejercicio15" element={<H1 />} />
          <Route path="/ejercicio16" element={
            <Prod 
              titulo="WARCRAFT" 
              desc="El mejor juego de la historia nada más que decir la verdad"
              precio="15USD" 
              imagen={warcraft} 
            />} 
          />
          <Route path='/ejercicio23' element={<Pokemon />}/>
          <Route path='/Todo' element={<Todo />}/>
          <Route path='/ejercicio29' element={<Trivia />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
