import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const Bar = ({ value: { icon, name, level } }) => {
  // framer motion
  const animationVariant = {
    hidden: {
      width: '0',
      opacity: 0,
    },
    visible: {
      width: `${level}%`,
      transition: { type: 'spring' },
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <div className='bar'>
      <motion.div
        className='bar_wrapper'
        variants={animationVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {icon}
        <span className='bar_name'>{name}</span>
      </motion.div>
    </div>
  );
};

export default Bar;
