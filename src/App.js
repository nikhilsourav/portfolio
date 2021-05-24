import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container-fluid main'>
          <div className='row glass'>
            <div className='sidebar'>
              <Sidebar />
            </div>
            <div className='content'>
              <Navbar />
              <Switch>
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
            </div>
          </div>
        </div>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='circle4'></div>
      </div>
    </Router>
  );
}

export default App;
