import React from 'react';
import classes from './teams.module.css';
//using compressed images
import person1 from './/images/person1-min.jpeg';
import person2 from './/images/person2-min.jpeg';
import person3 from './/images/person3-min.jpeg';

import androidIcon from './/icons/android.png';
import cppIcon from './/icons/cpp.png';
import reactIcon from './/icons/react.png';

function Teams() {
  return (
    <div className={classes.teams}>
      <div className={classes.row}>
        <div className={classes.rectangle}>
          <img src={person1} alt='person 1' className={classes.image} />
          <div className={classes.description}>
            <h3>John Doe</h3>
            <img src={androidIcon} alt='android' className={classes.icon} />
          </div>
          <p>John is mobile developer, he is responsible for responsive design</p>
        </div>
        <div className={classes.rectangle}>
          <img src={person2} alt='person 2' className={classes.image} />
          <div className={classes.description}>
            <h3>Jane Doe</h3>
            <img src={cppIcon} alt='cpp' className={classes.icon} />
          </div>
          <p>Jane is important person in making our backend. </p>
        </div>
        <div className={classes.rectangle}>
          <img src={person3} alt='person 3' className={classes.image} />
          <div className={classes.description}>
            <h3>Bob Smith</h3>
            <img src={reactIcon} alt='react' className={classes.icon} />
          </div>
          <p> Bob is head of front end development</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
