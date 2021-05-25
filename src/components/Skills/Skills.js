import React from 'react';
import './Skills.css';
import Bar from './Bar';
import { motion } from 'framer-motion';

// languages and tools data
const languages = [
  {
    icon: <i className='fab fa-python'></i>,
    name: 'Python',
    level: '49',
  },
  {
    icon: <i className='fab fa-js-square'></i>,
    name: 'JavaScript',
    level: '73',
  },
  {
    icon: <i className='fab fa-react'></i>,
    name: 'ReactJs',
    level: '65',
  },
  {
    icon: <i className='fas fa-terminal'></i>,
    name: 'C',
    level: '62',
  },

  {
    icon: <i className='fab fa-node-js'></i>,
    name: 'NodeJs',
    level: '72',
  },
  {
    icon: <i className='fas fa-code'></i>,
    name: 'C++',
    level: '69',
  },
  {
    icon: <i className='fas fa-database'></i>,
    name: 'MongoDB',
    level: '58',
  },
];

const tools = [
  {
    icon: <i className='fab fa-git-alt'></i>,
    name: 'Git',
    level: '75',
  },
  {
    icon: <i className='fab fa-github-alt'></i>,
    name: 'Github',
    level: '70',
  },
  {
    icon: <i className='fab fa-figma'></i>,
    name: 'Figma',
    level: '60',
  },
  {
    icon: <i className='fab fa-windows'></i>,
    name: 'VS Code',
    level: '80',
  },
  {
    icon: <i className='fas fa-camera'></i>,
    name: 'Photoshop',
    level: '73',
  },
  {
    icon: <i className='fas fa-address-card'></i>,
    name: 'Postman',
    level: '70',
  },
];

const Skills = () => {
  // framer motion
  const animationVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { type: 'tween', duration: 0.65, delay: 0 },
    },
    exit: {
      transition: { type: 'spring' },
      opacity: 0,
    },
  };

  return (
    <motion.div
      className='skills_container'
      variants={animationVariant}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='skills_languages'>
        <h5 className='skills_language_heading'>Languages &amp; Frameworks:</h5>
        <div className='skills_language_body'>
          {languages.map((language, index) => (
            <Bar value={language} key={index} />
          ))}
        </div>
      </div>
      <div className='skills_tools'>
        <h5 className='skills_language_heading'>Tools &amp; Softwares:</h5>
        <div className='skills_language_body'>
          {tools.map((tool, index) => (
            <Bar value={tool} key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
