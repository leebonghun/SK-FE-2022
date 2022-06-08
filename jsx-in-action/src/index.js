import 'styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ListRedering } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListRedering />
  </StrictMode>
);
