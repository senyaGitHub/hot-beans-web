import React from 'react';
import classes from './about.module.css';
import logo from '../logo/logo.png';

function About() {
  return (
    <div className={classes.about}>
      <div className={classes.content}>
        <h1>We Hot Beans Web!</h1>
        <p>We provide the best and most robust web development on the market. Our experienced team is dedicated to quality, innovation, and customer satisfaction. We offer the best up-time for a smooth and enjoyable experience.</p>
      </div>
  
      <div className={classes.imageContainer}>
            <img src={logo} alt="logo of hot-beans-web" className={classes.image}/>
    </div>
    </div>
  );
}

export default About;