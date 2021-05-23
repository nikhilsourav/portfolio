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

const Projects = () => {
  return (
    <div className='projects'>
      <div className='project_img_container'>
        <img className='project_img' src={weebook} alt='MERN Stack App' />
        <img className='project_img' src={canvas} alt='HTML5 Canvas' />
        <img className='project_img' src={calishred} alt='Calishred Fitness' />
        <img className='project_img' src={youtool} alt='Playlist Duration Calculator' />
        <img className='project_img' src={justtalk} alt='Chat App' />
        <img className='project_img' src={rose} alt='The Rose Solution' />
        <img className='project_img' src={weather} alt='Weather App' />
        <img className='project_img' src={fetch} alt='Fetch Random User' />
      </div>
    </div>
  );
};

export default Projects;
