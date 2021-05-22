import React, { useState } from 'react';
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

  return (
    <div className='navbar'>
      <div className='navbar_active'>{activePage}</div>
      <div className='navbar_items'>
        <a href='#' className='navbar_menu_container' onClick={toggleIcons}>
          <img className='navbar_menu navbar_activator' title='menu' src={menu} alt='menu' />
        </a>
        <Link
          to='/Projects'
          className={activeIcons ? 'navbar_icon_container active_icons' : 'navbar_icon_container'}
        >
          <a onClick={() => setActivePage('Projects')} href='#'>
            <img className='navbar_icon projects' title='projects' src={projects} alt='' />
          </a>
        </Link>
        <Link
          to='/Skills'
          className={activeIcons ? 'navbar_icon_container active_icons' : 'navbar_icon_container'}
        >
          <a onClick={() => setActivePage('Skills')} href='#'>
            <img className='navbar_icon skills' title='skills' src={skills} alt='' />
          </a>
        </Link>
        <Link
          to='/About'
          className={activeIcons ? 'navbar_icon_container active_icons' : 'navbar_icon_container'}
        >
          <a onClick={() => setActivePage('About')} href='#'>
            <img className='navbar_icon about' title='about' src={about} alt='' />
          </a>
        </Link>
        <Link
          to='/Home'
          className={activeIcons ? 'navbar_icon_container active_icons' : 'navbar_icon_container'}
        >
          <a onClick={() => setActivePage('Home')} href='#'>
            <img className='navbar_icon home' title='home' src={home} alt='' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
