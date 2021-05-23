import React from 'react';
import './Projects.css';
import calishred from '../../assets/projects/calishred.png';
import canvas from '../../assets/projects/canvas.png';
import fetch from '../../assets/projects/fetch.png';
import justtalk from '../../assets/projects/justtalk.png';
import rose from '../../assets/projects/rose.png';
import weather from '../../assets/projects/weather.png';
import weebook from '../../assets/projects/weebook.png';
import youtool from '../../assets/projects/youtool.png';
import github from '../../assets/icons/github_dark.svg';
import globe from '../../assets/icons/globe.svg';

const Projects = () => {
  return (
    <div className='projects wrapper'>
      <div className='project_img_container card'>
        <img className='project_img' src={weebook} alt='MERN Stack App' />
        <div className='project_descriptions'>
          <h5>WeeBook</h5>
          <p className='project_description_text'>
            MERN stack based social media app that allow users to post interesting articles.
          </p>
          <div className='project_links'>
            <a
              href='https://github.com/nikhilsourav/weebook-client'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='github link' src={github} alt='github' />
            </a>
            <a href='https://weebook.netlify.app/' target='_blank' rel='noopener noreferrer'>
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
      <div className='project_img_container card'>
        <img className='project_img' src={canvas} alt='HTML5 Canvas' />
        <div className='project_descriptions'>
          <h5>Canvas</h5>
          <p className='project_description_text'>
            HTML5 Canvas animations. A total of 6 effects including gravity and particle effect.
          </p>
          <div className='project_links'>
            <a
              href='https://github.com/nikhilsourav/canvas'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='github link' src={github} alt='github' />
            </a>
            <a
              href='https://nikhilsourav.github.io/canvas/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
      <div className='project_img_container card'>
        <img className='project_img' src={calishred} alt='Calishred Fitness' />
        <div className='project_descriptions'>
          <h5>Calishred fitness</h5>
          <p className='project_description_text'>
            Calishred Fitness is a personal fitness training service by &nbsp;
            <a
              href='https://www.linkedin.com/in/pranav-calishred/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pranav Thakur
            </a>
          </p>
          <div className='project_links'>
            <a
              href='https://github.com/nikhilsourav/CalishredFitness'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='github link' src={github} alt='github' />
            </a>
            <a
              href='https://nikhilsourav.github.io/CalishredFitness/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
      <div className='project_img_container card'>
        <img className='project_img' src={youtool} alt='Playlist Duration Calculator' />
        <div className='project_descriptions'>
          <h5>YouTool</h5>
          <p className='project_description_text'>
            Youtube playlist duration calculator with youtube API, ReactJS and NodeJS.
          </p>
          <div className='project_links'>
            <a
              href='https://github.com/nikhilsourav/YouTool'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='github link' src={github} alt='github' />
            </a>
            <a href='https://youtool.netlify.app/' target='_blank' rel='noopener noreferrer'>
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
      <div className='project_img_container card'>
        <img className='project_img' src={justtalk} alt='Chat App' />
        <div className='project_descriptions'>
          <h5>JustTalk</h5>
          <p className='project_description_text'>
            Real-time chat application based on socket.io javascript library and NodeJS.
          </p>
          <div className='project_links'>
            <a
              href='https://github.com/nikhilsourav/JustTalk'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='github link' src={github} alt='github' />
            </a>
            <a
              href='http://chat-app-by-nikhilsourav.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
      <div className='project_img_container card'>
        <img className='project_img' src={rose} alt='The Rose Solution' />
        <div className='project_descriptions'>
          <h5>The Rose Solution</h5>
          <p className='project_description_text'>
            Flower distribution company that provides door-to-door flower delivery service.
          </p>
          <div className='project_links'>
            <a href='http://therosesolution.in/' target='_blank' rel='noopener noreferrer'>
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
      <div className='project_img_container card'>
        <img className='project_img' src={weather} alt='Weather App' />
        <div className='project_descriptions'>
          <h5>Go-Weather</h5>
          <p className='project_description_text'>
            Weather appliction that provides accurate current temperature and daily forecast.
          </p>
          <div className='project_links'>
            <a
              href='https://github.com/nikhilsourav/Go-weather'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='github link' src={github} alt='github' />
            </a>
            <a
              href='http://weather-app-by-ns.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
      <div className='project_img_container card'>
        <img className='project_img' src={fetch} alt='Fetch Random User' />{' '}
        <div className='project_descriptions'>
          <h5>Fetch User</h5>
          <p className='project_description_text'>
            ReactJS based app that displays random user data fetched from an external API.
          </p>
          <div className='project_links'>
            <a
              href='https://github.com/nikhilsourav/fetch-user'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='github link' src={github} alt='github' />
            </a>
            <a
              href='https://nikhilsourav.github.io/fetch-user/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img title='visit' src={globe} alt='visit' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
