import React from 'react';
import classes from './courses.module.css';
import codingImage1 from './images/coding-min.jpg';
import codingImage2 from './images/coding2-min.jpg';
import codingImage3 from './images/coding3-min.jpg';
import designImage1 from './images/design1-min.jpg';
import designImage2 from './images/design2-min.jpg';
import designImage3 from './images/design3-min.jpg';

// please note, this mess is for different backgrounds to work properly. Maybe it is not the best solution, but i am new to react and it is good enough to work.
function Courses() {
  const courseData = [
    {
      title: "Web Development Courses",
      description: "Learn HTML, CSS, JavaScript, and more at W3Schools.",
      url: "https://www.w3schools.com/",
      image: codingImage1
    },
    {
      title: "Graphic Design Courses",
      description: "Learn graphic design fundamentals at Skillshare.",
      url: "https://www.skillshare.com/",
      image: designImage1
    },
    {
      title: "Digital Marketing Courses",
      description: "Learn digital marketing strategies at Coursera.",
      url: "https://www.coursera.org/",
      image: codingImage2
    },
    {
      title: "UI/UX Design Courses",
      description: "Learn UI/UX design principles at Udemy.",
      url: "https://www.udemy.com/",
      image: designImage2
    },
    {
      title: "Front-End Development Courses",
      description: "Learn front-end development at Codecademy.",
      url: "https://www.codecademy.com/",
      image: codingImage3
    },
    {
      title: "Animation Courses",
      description: "Learn animation and motion design at Domestika.",
      url: "https://www.domestika.org/",
      image: designImage3
    }
  ];

  return (
    <div className={classes.courses}>
      <h2 className={classes.heading}>If you would like to work in our company here are some courses you might want to consider</h2>
      <div className={classes.row}>
        {courseData.map((course, index) => (
          <a
            href={course.url}
            className={`${classes.courseRectangle} ${index === 0 ? classes.withBackground : ''}`}
            target='_blank'
            rel='noopener noreferrer'
            style={{backgroundImage: `url(${course.image})`}}
            key={index}
          >
            <div className={classes.courseDetails}>
              <h3 className={classes.courseTitle}>{course.title}</h3>
              <p className={classes.courseDescription}>{course.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Courses;
