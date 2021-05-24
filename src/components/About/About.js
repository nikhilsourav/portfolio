import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about_container'>
      <h3>Education</h3>
      <section id='cd-timeline' className='cd-container'>
        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>

          <div className='cd-timeline-content'>
            <h5>Indian Institute of Information Technology, Ranchi</h5>
            <p> Bachelor’s of Technology in Electronics and Communication Engineering</p>
            <span className='cd-date'>2018 - 2022</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-movie'></div>
          <div className='cd-timeline-content'>
            <h5>Rajkamal Saraswati Vidya Mandir, Dhanbad</h5>
            <p>Senior Secondary Education (CBSE)</p>
            <span className='cd-date'>2015 - 2017</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>

          <div className='cd-timeline-content'>
            <h5>D.A.V. Public School, Barora</h5>
            <p>Secondary Education (CBSE)</p>
            <span className='cd-date'>2005 - 2015</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
