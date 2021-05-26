import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();

  // framer motion
  const animationVariant_1 = {
    hidden: {
      x: 0,
    },
    visible: {
      x: '-5vw',
      transition: { type: 'just', duration: 20, yoyo: Infinity },
    },
    exit: {
      transition: { type: 'spring' },
      opacity: 0,
    },
  };
  const animationVariant_2 = {
    hidden: {
      x: 0,
    },
    visible: {
      x: '5vw',
      transition: { type: 'just', duration: 28, yoyo: Infinity },
    },
    exit: {
      transition: { type: 'spring' },
      opacity: 0,
    },
  };
  const animationVariant_3 = {
    hidden: {
      y: 0,
    },
    visible: {
      y: '15vh',
      transition: { type: 'just', duration: 20, yoyo: Infinity },
    },
    exit: {
      transition: { type: 'spring' },
      opacity: 0,
    },
  };
  const animationVariant_4 = {
    hidden: {
      y: 0,
    },
    visible: {
      y: '-15vh',
      transition: { type: 'just', duration: 28, yoyo: Infinity },
    },
    exit: {
      transition: { type: 'spring' },
      opacity: 0,
    },
  };

  return (
    <div className='App'>
      <div className='container-fluid main'>
        <div className='row glass'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='content'>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route path='/' exact>
                  <About />
                </Route>
                <Route path='/Skills' exact>
                  <Skills />
                </Route>
                <Route path='/Projects' exact>
                  <Projects />
                </Route>
                <Route>
                  <Redirect to='/' />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* circles */}
      <motion.div
        variants={animationVariant_1}
        initial='hidden'
        animate='visible'
        className='circle1'
      ></motion.div>
      <motion.div
        variants={animationVariant_2}
        initial='hidden'
        animate='visible'
        className='circle2'
      ></motion.div>
      <motion.div
        variants={animationVariant_3}
        initial='hidden'
        animate='visible'
        className='circle3'
      ></motion.div>
      <motion.div
        variants={animationVariant_4}
        initial='hidden'
        animate='visible'
        className='circle4'
      ></motion.div>
    </div>
  );
}

export default App;
