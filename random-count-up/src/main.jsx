import './utils';
import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// document.addEventListener('click', () => location.reload());
