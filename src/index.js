import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.render(
  <BrowserRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

