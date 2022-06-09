import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';
import ParentApp from './ParentApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ParentApp />
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();