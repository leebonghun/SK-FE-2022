import './utils';
import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RandomCountUp } from './components';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <RandomCountUp count={0} min={20} max={30} fps={10} />
  </React.StrictMode>
);
