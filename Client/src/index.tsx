import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './indexS.scss';


ReactDOM.render(
  <StrictMode>
    <div className="index">
      <App />
    </div>
  </StrictMode>,

  document.getElementById('root')
);


