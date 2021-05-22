import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/icons/menu.svg';
import home from '../../assets/icons/home.svg';
import about from '../../assets/icons/person.svg';
import skills from '../../assets/icons/skill.svg';
import projects from '../../assets/icons/projects.svg';
import './Navbar.css';

const Navbar = () => {
  // Animated icons
  const [activeIcons, setActiveIcons] = useState(false);
  const toggleIcons = () => {
    setActiveIcons(!activeIcons);
  };

  // Active Page
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    let currentUrl = window.location.href;

    if (currentUrl.endsWith('/')) setActivePage('Home');
    else if (currentUrl.endsWith('/About')) setActivePage('About');
    else if (currentUrl.endsWith('/Skills')) setActivePage('Skills');
    else if (currentUrl.endsWith('/Projects')) setActivePage('Projects');
  }, [activePage]);

  return (
    <div className='navbar'>
      <div className='navbar_active'>{activePage}</div>
      <div className='navbar_items'>
        <button className='navbar_menu_container ripple' onClick={toggleIcons}>
          <img className='navbar_menu navbar_activator' title='menu' src={menu} alt='menu' />
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
          <img className='navbar_icon projects' title='projects' src={projects} alt='' />
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
          <img className='navbar_icon skills' title='skills' src={skills} alt='' />
        </Link>
        <Link
          onClick={() => setActivePage('About')}
          href='#'
          to='/About'
          className={
            activeIcons
              ? 'navbar_icon_container active_icons ripple'
              : 'navbar_icon_container ripple'
          }
        >
          <img className='navbar_icon about' title='about' src={about} alt='' />
        </Link>
        <Link
          to='/'
          className={
            activeIcons
              ? 'navbar_icon_container active_icons ripple'
              : 'navbar_icon_container ripple'
          }
          onClick={() => setActivePage('Home')}
          href='#'
        >
          <img className='navbar_icon home' title='home' src={home} alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
