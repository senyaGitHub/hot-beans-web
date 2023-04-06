import React from 'react';
import classes from './courses.module.css';
import codingImage from './/images/coding.jpg';


function Courses() {
  return (
    <div className={classes.courses}>
      <div className={classes.row}>
        <a href='https://www.w3schools.com/' className={classes.courseRectangle} target='_blank' rel='noopener noreferrer' style={{backgroundImage: `url(${codingImage})`}}>
          <div>
            <h3 style={{color: '#fff'}}>Web Development Courses</h3>
            <p style={{color: '#fff'}}>Learn HTML, CSS, JavaScript, and more at W3Schools.</p>
          </div>
        </a>    
        <a href='https://www.w3schools.com/' className={classes.courseRectangle} target='_blank' rel='noopener noreferrer'>
          <div>
            <h3>Web Development Courses</h3>
            <p>Learn HTML, CSS, JavaScript, and more at W3Schools.</p>
          </div>
        </a>    
        <a href='https://www.w3schools.com/' className={classes.courseRectangle} target='_blank' rel='noopener noreferrer'>
          <div>
            <h3>Web Development Courses</h3>
            <p>Learn HTML, CSS, JavaScript, and more at W3Schools.</p>
          </div>
        </a>        
      </div>
    </div>
  );
}

export default Courses;
