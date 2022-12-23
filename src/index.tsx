import React from 'react';
import ReactDOM from "react-dom/client";

import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
const root = ReactDOM.createRoot(document.getElementById("root") as Element); 

const portalDiv = document.getElementById('root')!;
// const root = ReactDOM.createRoot(document.getElementById(portalDiv));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>
);
