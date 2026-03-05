import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "dotenv";
import { default as React } from "react";
import ReactDOM from "react-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";

require("dotenv").config();

// axios.defaults.baseURL = "https://api.theprintribe.com/api";
// axios.defaults.baseURL = "http://localhost:500/api";
axios.defaults.baseURL = "https://wuthering-lai-patently.ngrok-free.dev/api";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "true";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
