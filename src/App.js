import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import courses from './pages/courses';
import Teams from './pages/teams';
import login from './pages/login';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' component={About} />
        <Route path='/courses' component={courses} />
        <Route path='/team' component={Teams} />
        <Route path='/login' component={login} />
      </Routes>
    </Router>
  );
}
  
export default App;