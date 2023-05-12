import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';

import Join from './pages/join';
import About from './pages/about';
import Teams from './pages/teams';
import Courses from './pages/courses';
import JobSpecs from './pages/JobSpecs'; // Import new page

import githubLogo from './logo/github-mark.png';


function App() {
  return (
    <div className='App'>
      <div className="wrapper">
      <nav className='navbar'>
        <NavLink to='/hot-beans-web/about'>About</NavLink>
        <NavLink to='/hot-beans-web/teams'>Teams</NavLink>
        <NavLink to='/hot-beans-web/courses'>Courses</NavLink>
        <NavLink to='/hot-beans-web/job-specs'>Job Specs</NavLink> {/* Add new page to navbar */}
        <NavLink to='/hot-beans-web/join'>Join</NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path='/hot-beans-web/' component={About} />
          <Route path='/hot-beans-web/join' component={Join} />
          <Route path='/hot-beans-web/about' component={About} />
          <Route path='/hot-beans-web/teams' component={Teams} />
          <Route path='/hot-beans-web/courses' component={Courses} />
          <Route path='/hot-beans-web/job-specs' component={JobSpecs} /> {/* Add new page route */}
          <Redirect to='/hot-beans-web/' />
        </Switch>
      </main>
      <footer>
  <div className='footer__left'>
    <a href='https://github.com/senyagithub' target='_blank' rel='noopener noreferrer'>
      <img src={githubLogo} alt='Github' />
      <p>Arsenii Selivanov</p>
    </a>
  </div>
</footer>
      
      </div>
    </div>
  );
}

export default App;