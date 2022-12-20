import React from 'react';
import ReactDOM from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit'

import './index.css';
import App from './App';
import movies from './reducers';

const store = configureStore({ reducer: movies})
// console.log('STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{}]
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store={store} />
  </React.StrictMode>
);


