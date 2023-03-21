import React from 'react';
import "./App.css"
import Join from './pages/join';
import { BrowserRouter, Route } from "react-router-dom";
import About from './pages/about';


function App() {
  return (
  <BrowserRouter>
    <div className='navbar'>
      <div className='navbar__links'>
        <a href='/hot-beans-web/join'>Join</a>
        <a href='/hot-beans-web/about'>About</a>
      </div>
    </div>


    <Route path="/hot-beans-web/about" component={About} /> 
    <Route path="/hot-beans-web/join" component={Join} />
    </BrowserRouter>
  );
};
  
export default App;