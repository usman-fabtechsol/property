import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter } from 'react-router-dom';
// Bootstrap Bundle icon
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap Bundle css
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
