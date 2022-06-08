import './utils';
import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RandomCountUp } from './components';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <RandomCountUp count={0} step={10} />
  </React.StrictMode>
);
