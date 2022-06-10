import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const initialAppContextValue = {
  name: 'App Context',
};

export const AppContext = React.createContext(initialAppContextValue);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={initialAppContextValue}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);
