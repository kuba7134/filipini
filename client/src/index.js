import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

const baseURL = document
  .getElementsByTagName("base")[0]
  .getAttribute("href");

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router basename={baseURL}>
      <App tab="home" />
    </Router>
  </React.StrictMode>
);
