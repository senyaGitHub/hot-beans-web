import React from 'react';
import "./App.css"
import Join from './pages/join';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import About from './pages/about';


function App() {
  return (
    <div>
    <div className='navbar'>
      <div className='navbar__links'>
        <NavLink to='/hot-beans-web/join'>Join</NavLink>
        <NavLink to='/hot-beans-web/about'>About</NavLink>
      </div>
    </div>


    <Route path="/hot-beans-web/about" component={About} /> 
    <Route path="/hot-beans-web/join" component={Join} />
  </div>
  );
};
  
export default App;