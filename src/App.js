import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='container-fluid main'>
        <div className='row glass'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='content'>content</div>
        </div>
      </div>
      <div className='circle1'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='circle4'></div>
    </div>
  );
}

export default App;
