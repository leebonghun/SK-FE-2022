import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <App count={90} step={10} id="app-023kd" title="app" />
  </React.StrictMode>
);
