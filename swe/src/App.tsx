import React from 'react';
import roughLogo from './roughLogo.png';
import './App.css';

function App() {
  return (
    <div className='container d-flex justify-content-center vh-100 align-items-center'>
      <div className='vstack d-flex justify-content-center'>
        <div className="col-sm-12 text-center">
          <img src={roughLogo} alt="roughLogo" style={{ width: '300px', height: '300px'}}/>
        </div>
        <h2 className="text-center mt-5" style={{ color: '#E43A96' }}>
          TheSweetSWE
        </h2>
        <p className="text-center" style={{ color: '#F676A0' }}>
          looks ugly at the moment I know! <br />
          just wanted to replace the react logo!
        </p>
      </div>
    </div>
  );
}

export default App;

