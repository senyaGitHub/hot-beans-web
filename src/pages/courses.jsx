import React, { useState, useEffect } from 'react';
import classes from './courses.module.css';
import codingImage1 from './images/coding-min.jpg';
import codingImage2 from './images/coding2-min.jpg';
import codingImage3 from './images/coding3-min.jpg';
import designImage1 from './images/design1-min.jpg';
import designImage2 from './images/design2-min.jpg';
import designImage3 from './images/design3-min.jpg';

function Courses() {
  const [loading, setLoading] = useState(true);
  
  const courseData = [
    {
      title: "Web Development Courses",
      url: "https://www.w3schools.com/",
      image: codingImage1,
      alt: "Web development courses"
    },
    {
      title: "Graphic Design Courses",
      url: "https://www.skillshare.com/",
      image: designImage1,
      alt: "Graphic design courses"
    },
    {
      title: "Digital Marketing Courses",
      url: "https://www.coursera.org/",
      image: codingImage2,
      alt: "Digital marketing courses"
    },
    {
      title: "UI/UX Design Courses",
      
      url: "https://www.udemy.com/",
      image: designImage2,
      alt: "UI/UX design courses"
    },
    {
      title: "Front-End Development Courses",
      url: "https://www.codecademy.com/",
      image: codingImage3,
      alt: "Front-end development courses"
    },
    {
      title: "Animation Courses",
      url: "https://www.domestika.org/",
      image: designImage3,
      alt: "Animation courses"
    }
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={classes.courses}>
      <h2 className={classes.heading}>If you would like to work in our company here are some courses you might want to consider</h2>
      <div className={classes.row}>
        {loading ? (
          <p>Loading courses...</p>
        ) : (
          courseData.map((course, index) => (
            <a
              href={course.url}
              className={`${classes.courseRectangle} ${index === 0 ? classes.withBackground : ''}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{backgroundImage: `url(${course.image})`}}
              key={index}
              alt={course.alt}
            >
              <div className={classes.courseDetails}>
                <h3 className={classes.courseTitle}>{course.title}</h3>
                <p className={classes.courseDescription}>{course.description}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export default Courses;