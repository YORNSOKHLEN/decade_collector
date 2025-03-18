import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./components/css/index.css";
import App from "./App.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
