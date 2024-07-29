import React from "react";

// import ReactDOM from 'react-dom';
// import './index.css';

import App from "./App";

// import reportWebVitals from './reportWebVitals';
import "normalize.css";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "../node_modules/normalize.css/normalize.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
