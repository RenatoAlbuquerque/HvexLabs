import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GithubProvider from "./providers/githubProvider";

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
