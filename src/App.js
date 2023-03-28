import React from 'react';
import './App.css';
import Join from './pages/join';
import About from './pages/about';
import { Route, NavLink } from 'react-router-dom';
import githubLogo from './logo/github-mark.png';

function App() {
  return (
    <div className='App'>
      <nav className='navbar'>
        <NavLink to='/hot-beans-web/join'>Join</NavLink>
        <NavLink to='/hot-beans-web/about'>About</NavLink>
      </nav>
      <main>
        <Route path='/hot-beans-web/join' component={Join} />
        <Route path='/hot-beans-web/about' component={About} />
      </main>
      <footer>
        <div className='footer__left'>
          <img src={githubLogo} alt='Github' />
          <p>Arsenii Selivanov</p>
        </div>
      </footer>
    </div>
  );
}

export default App;