import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactCard from './ContactCard';
import Countdown from './Countdown';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <ContactCard />
    <ContactCard />
    <ContactCard />
    <ContactCard />
    <ContactCard />
  </React.StrictMode>,
  document.getElementById('contact-card')
);

 ReactDOM.render(
   <React.StrictMode>
     <Countdown />
   </React.StrictMode>,
   document.getElementById('countdown')
 );

reportWebVitals();
