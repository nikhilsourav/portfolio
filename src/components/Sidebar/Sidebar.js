import React from 'react';
import profile from '../../assets/projects/profile.png';
import resume from '../../assets/resume/resume.pdf';
import './Sidebar.css';
import { motion } from 'framer-motion';

const Sidebar = () => {
  // framer motion
  const animationVariant = {
    hidden: {
      x: '-2vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <div className='sidebar_container'>
      <motion.img
        src={profile}
        alt='profile'
        className='sidebar_img'
        variants={animationVariant}
        initial='hidden'
        animate='visible'
        transition={{ type: 'tween', duration: 0.5, delay: 0 }}
        exit='exit'
      />
      <motion.div
        className='sidebar_name'
        variants={animationVariant}
        initial='hidden'
        animate='visible'
        transition={{ type: 'tween', duration: 0.5, delay: 0.15 }}
        exit='exit'
      >
        Nikhil<span> Sourav</span>
      </motion.div>
      <motion.div
        className='sidebar_about'
        variants={animationVariant}
        initial='hidden'
        animate='visible'
        transition={{ type: 'tween', duration: 0.5, delay: 0.3 }}
        exit='exit'
      >
        <ul>
          <li>Full-Stack Developer</li>
          <li>Open Source Contributer</li>
          <li>Competitive Programmer</li>
        </ul>
      </motion.div>
      <motion.a
        id='sidebar_btn'
        href={resume}
        download='resume.pdf'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'tween', duration: 0.5, delay: 0.45 }}
        exit='exit'
      >
        <span className='sidebar_resume'>
          resume<div id='circle'></div>
        </span>
      </motion.a>
      <motion.div
        className='sidebar_details'
        variants={animationVariant}
        initial='hidden'
        animate='visible'
        transition={{ type: 'tween', duration: 0.5, delay: 0.6 }}
        exit='exit'
      >
        <h5 className='sidebar_details_heading'>Personal Details:</h5>
        <ul>
          <li>
            <i className='fas fa-map-marker-alt sidebar_icons address'></i>
            Dhanbad, Jharkhand
          </li>
          <li>
            <i className='fas fa-phone-alt sidebar_icons phone'></i>
            +91 6205996766
          </li>
          <li>
            <i className='fas fa-envelope sidebar_icons email'></i>
            nikhil.rj900@gmail.com
          </li>
        </ul>
      </motion.div>
      <motion.div
        className='sidebar_socials'
        variants={animationVariant}
        initial='hidden'
        animate='visible'
        transition={{ type: 'tween', duration: 0.5, delay: 0.75 }}
        exit='exit'
      >
        <h5 className='sidebar_details_heading'>Social Media:</h5>
        <ul>
          <a href='https://github.com/nikhilsourav' target='_blank' rel='noopener noreferrer'>
            <li>
              <i className='fab fa-github sidebar_icons github'></i>
              Github
            </li>
          </a>
          <a
            href='https://www.linkedin.com/in/nikhil-sourav-796024183/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>
              <i className='fab fa-linkedin sidebar_icons linkedin'></i>
              LinkedIn
            </li>
          </a>
          <a href='https://hashnode.com/@fifu' target='_blank' rel='noopener noreferrer'>
            <li>
              <i className='fas fa-file-code sidebar_icons hashnode'></i>
              Hashnode
            </li>
          </a>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
