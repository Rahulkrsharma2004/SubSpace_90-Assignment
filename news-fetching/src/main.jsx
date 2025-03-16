import React from 'react';
import ReactDOM from 'react-dom/client';
import { NhostProvider } from '@nhost/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import nhost from './nhost';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NhostProvider nhost={nhost}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NhostProvider>
);
