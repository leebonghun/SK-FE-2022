import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContext, initialAppContextValue } from './contexts/app';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={initialAppContextValue}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);
