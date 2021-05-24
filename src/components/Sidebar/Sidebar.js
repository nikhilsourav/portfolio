import React from 'react';
import profile from '../../assets/projects/profile.png';
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
      </div>
      <div className='sidebar_socials'>
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
      </div>
    </div>
  );
};

export default Sidebar;
