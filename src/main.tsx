import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import GlobaStyles from './styles/global';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <>
     <BrowserRouter>
        <ToastContainer autoClose={1000} />
        <GlobaStyles />
        <App />
     </BrowserRouter>
    </>
  </>,
);
