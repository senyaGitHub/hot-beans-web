import React from 'react';
import styles from './JobSpecs.module.css';

const JobSpecs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Web Developer Job Specifications and Required Qualifications</h1>
      <ul className={styles.list}>
        <li>Proficient in HTML, CSS, and JavaScript</li>
        <li>Experience with front-end libraries and frameworks like React or Angular</li>
        <li>Understanding of server-side technologies like Node.js or PHP</li>
        <li>Knowledge of back-end databases like MySQL or MongoDB</li>
        <li>Full-stack development experience is a plus</li>
        <li>Strong problem-solving skills</li>
        <li>Ability to work independently and within a team</li>
        <li>Excellent communication and collaboration skills</li>
        <li>Bachelor's degree in computer science or related field</li>
      </ul>
    </div>
  );
};

export default JobSpecs;