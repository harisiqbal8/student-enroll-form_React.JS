import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import appStore from './store'

import App2 from './App2'
import smsStore from './smsStore'


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={appStore}>
      <App />
    </Provider> */}
    <Provider store={smsStore}>
      <App2 />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
