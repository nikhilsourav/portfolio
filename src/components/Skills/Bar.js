import React from 'react';
import './Skills.css';

const Bar = ({ value: { icon, name, level } }) => {
  const bar_width = `${level}%`;
  return (
    <div className='bar'>
      <div className='bar_wrapper' style={{ width: bar_width }}>
        {icon}
        <span className='bar_name'>{name}</span>
      </div>
    </div>
  );
};

export default Bar;
