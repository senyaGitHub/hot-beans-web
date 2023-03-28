import React from 'react';
import  "./App.css"
import Join from './pages/join';
import {Route, NavLink } from "react-router-dom";
import About from './pages/about';
import githubLogo from ".//logo/github-mark.png"

function App() {
  return (
  <div>
    <div className='navbar'>
      <div className='navbar__links'>
        <NavLink to='/hot-beans-web/join'>Join</NavLink>
        <NavLink to='/hot-beans-web/about'>About</NavLink>
      </div>
    </div>
    
    <div><br/></div>
    <div><br/></div>
    <Route path="/hot-beans-web/about" component={About} /> 
    <Route path="/hot-beans-web/join" component={Join} />
    <footer>
      <div class='glogo'>
    <img src={githubLogo} alt='github'/>
    </div>

    <p>Arsenii Selivanov</p>
      
    </footer>
  </div>
  );
};
  
export default App;