import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clevertap from 'clevertap-web-sdk';


clevertap.privacy.push({optOut: false}) // Set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false})  // Set the flag to true, if the user agrees to share their IP data
clevertap.init('W44-Z4K-K65Z', 'eu1') 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
