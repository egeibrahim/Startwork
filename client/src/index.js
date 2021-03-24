import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import App from "./App";
import { setAuthorizationToken } from "./redux/helpers/setAuthorizationToken";
import jwt from "jwt-decode";

import "./styles.css";

const rootElement = document.getElementById("root");
const storeConfig = store();

const jwtToken = localStorage.getItem("token");
if (jwtToken) {
  if (Date.now() > jwt(jwtToken).exp * 1000) {
    localStorage.removeItem("token");
  }
  setAuthorizationToken(jwtToken);
}

ReactDOM.render(
  <Router>
    <Provider store={storeConfig}>
      <App />
    </Provider>
  </Router>,
  rootElement
);
