import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';

import './index.css';
import App from './Pages/App/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
