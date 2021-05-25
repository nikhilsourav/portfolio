import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  // Animated icons
  const [activeIcons, setActiveIcons] = useState(false);
  const toggleIcons = () => {
    setActiveIcons(!activeIcons);
  };

  // Active Page
  const [activePage, setActivePage] = useState('About');

  useEffect(() => {
    let currentUrl = window.location.href;

    if (currentUrl.endsWith('/')) setActivePage('About');
    else if (currentUrl.endsWith('/About')) setActivePage('About');
    else if (currentUrl.endsWith('/Skills')) setActivePage('Skills');
    else if (currentUrl.endsWith('/Projects')) setActivePage('Projects');
  }, [activePage]);

  // framer motion
  const animationVariant = {
    hidden: {
      y: '-2vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className='navbar'
      variants={animationVariant}
      initial='hidden'
      animate='visible'
      transition={{ type: 'tween', duration: 0.6, delay: 0 }}
    >
      <div className='navbar_active'>{activePage}</div>
      <div className='navbar_items'>
        <button className='navbar_menu_container ripple' onClick={toggleIcons}>
          <i className='fas fa-bars navbar_menu'></i>
        </button>
        <Link
          to='/Projects'
          className={
            activeIcons
              ? 'navbar_icon_container active_icons ripple'
              : 'navbar_icon_container ripple'
          }
          onClick={() => setActivePage('Projects')}
          href='#'
        >
          <i className='fas fa-briefcase navbar_icon projects'></i>
        </Link>
        <Link
          to='/Skills'
          className={
            activeIcons
              ? 'navbar_icon_container active_icons ripple'
              : 'navbar_icon_container ripple'
          }
          onClick={() => setActivePage('Skills')}
          href='#'
        >
          <i className='fas fa-tools navbar_icon skills'></i>
        </Link>
        <Link
          onClick={() => setActivePage('About')}
          href='#'
          to='/'
          className={
            activeIcons
              ? 'navbar_icon_container active_icons ripple'
              : 'navbar_icon_container ripple'
          }
        >
          <i className='fas fa-user navbar_icon about'></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
