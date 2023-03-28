import React from 'react';
import classes from './teams.module.css';
//import person1 from '../images/person1.png';
// import person2 from '../images/person2.png';
// import person3 from '../images/person3.png';

function Teams() {
  return (
    <div className={classes.teams}>
      <div className={classes.team}>
        {/* <img src={person1} alt="Person 1" className={classes.personImage} /> */}
        <div className={classes.personDescription}>
          <h2>Person 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet justo a nisl commodo iaculis. Fusce dignissim ante quis ex malesuada dignissim. Sed quis mauris tincidunt, egestas lorem nec, faucibus augue.</p>
        </div>
      </div>
      <div className={classes.team}>
        {/* <img src={person2} alt="Person 2" className={classes.personImage} /> */}
        <div className={classes.personDescription}>
          <h2>Person 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet justo a nisl commodo iaculis. Fusce dignissim ante quis ex malesuada dignissim. Sed quis mauris tincidunt, egestas lorem nec, faucibus augue.</p>
        </div>
      </div>
      <div className={classes.team}>
        {/* <img src={person3} alt="Person 3" className={classes.personImage} /> */}
        <div className={classes.personDescription}>
          <h2>Person 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet justo a nisl commodo iaculis. Fusce dignissim ante quis ex malesuada dignissim. Sed quis mauris tincidunt, egestas lorem nec, faucibus augue.</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;