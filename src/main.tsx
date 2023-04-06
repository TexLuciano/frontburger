import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobaStyles from './styles/global';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode>
      <ToastContainer autoClose={2000} />
      <GlobaStyles />
      <App />
    </React.StrictMode>
  </>,
);
