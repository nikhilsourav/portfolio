import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  // framer motion
  const aboutVariant = {
    hidden: {
      y: '3vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.65, delay: 0 },
    },
    exit: {
      opacity: 0,
      transition: { type: 'sprint' },
    },
  };

  const headingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <div className='about_container'>
      <motion.h1
        variants={headingVariant}
        initial='hidden'
        animate='visible'
        transition={{ type: 'tween', duration: 0.7, delay: 0 }}
        exit='exit'
      >
        Hi there! I'm Nikhil. A Full-stack developer, open-source contributor, engineer and
        passionate coder.
      </motion.h1>

      {/* Education */}
      <motion.h3
        variants={headingVariant}
        initial='hidden'
        animate='visible'
        transition={{ type: 'tween', duration: 0.7, delay: 0 }}
        exit='exit'
      >
        Education:
      </motion.h3>
      <motion.section
        id='cd-timeline'
        className='cd-container'
        variants={aboutVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>D.A.V. Public School, Barora</h5>
            <p>Secondary Education (CBSE) </p>
            <span className='cd-date'>2005 - 2015</span>
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
            <h5>Indian Institute of Information Technology, Ranchi</h5>
            <p> Bachelor’s of Technology in Electronics and Communication Engineering</p>
            <span className='cd-date'>2018 - Present</span>
          </div>
        </div>
      </motion.section>

      {/* Timeline */}
      <h3 variants={headingVariant}>Timeline:</h3>

      <section id='cd-timeline' className='cd-container timeline-length-fix'>
        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>The Humble Beginning</h5>
            <p> Learned HTML, CSS, Git, Github </p>
            <span className='cd-date'>Mar 2020</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>Certification Course</h5>
            <p> Responsive Web Design </p>
            <span className='cd-date'>May 2020</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-movie'></div>
          <div className='cd-timeline-content'>
            <h5>Certification Course</h5>
            <p>JavaScript Data Structures and Algorithms</p>
            <span className='cd-date'>July 2020</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>Attended Online Bootcamp</h5>
            <p>NodeJs Master Class by Andrew Mead</p>
            <span className='cd-date'>Sep 2020</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>Attended Udemy Course</h5>
            <p>ReactJs by Maximilian Schwarzmüller</p>
            <span className='cd-date'>Dec 2020</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>Freelance Work</h5>
            <p>Developed websites for local business</p>
            <span className='cd-date'>Jan 2021</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>Project Work</h5>
            <p>Created full stack MERN app called weebook</p>
            <span className='cd-date'>Feb 2021</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>Attended Online Course</h5>
            <p>Data Structurs and Algorithms by Geeks for Geeks (C ++)</p>
            <span className='cd-date'>Apr 2021</span>
          </div>
        </div>

        <div className='cd-timeline-block'>
          <div className='cd-timeline-img cd-picture'></div>
          <div className='cd-timeline-content'>
            <h5>Competitive Coding</h5>
            <p>Achieved 1656 rating in Codechef</p>
            <span className='cd-date'>Apr 2021</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
