import React from 'react';
import profile from '../../assets/projects/profile.png';
import address from '../../assets/icons/address.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import hashnode from '../../assets/icons/hashnode.svg';
import resume from '../../assets/resume/resume.pdf';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
      <img src={profile} alt='profile' className='sidebar_img' />
      <div className='sidebar_name'>
        Nikhil<span> Sourav</span>
      </div>
      <div className='sidebar_about'>
        <ul>
          <li>Full-Stack Developer</li>
          <li>Open Source Contributer</li>
          <li>Competitive Programmer</li>
        </ul>
      </div>
      <a id='sidebar_btn' href={resume} download='resume.pdf'>
        <span className='sidebar_resume'>
          resume<div id='circle'></div>
        </span>
      </a>
      <div className='sidebar_details'>
        <h5 className='sidebar_details_heading'>Personal Details:</h5>
        <ul>
          <li>
            <img className='sidebar_icons address' src={address} alt='address' />
            Dhanbad, Jharkhand
          </li>
          <li>
            <img className='sidebar_icons phone' src={phone} alt='phone' />
            +91 6205996766
          </li>
          <li>
            <img className='sidebar_icons email' src={email} alt='email' />
            nikhil.rj900@gmail.com
          </li>
        </ul>
      </div>
      <div className='sidebar_socials'>
        <h5 className='sidebar_details_heading'>Social Media:</h5>
        <ul>
          <a href='https://github.com/nikhilsourav' target='_blank' rel='noopener noreferrer'>
            <li>
              <img className='sidebar_icons github' src={github} alt='github' />
              Github
            </li>
          </a>
          <a
            href='https://www.linkedin.com/in/nikhil-sourav-796024183/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <li>
              <img className='sidebar_icons linkedin' src={linkedin} alt='linkedin' />
              LinkedIn
            </li>
          </a>
          <a href='https://hashnode.com/@fifu' target='_blank' rel='noopener noreferrer'>
            <li>
              <img className='sidebar_icons hashnode' src={hashnode} alt='hashnode' />
              Hashnode
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
