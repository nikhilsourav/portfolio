import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

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
