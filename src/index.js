import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthStore from "./redux/Store";
import axios from "axios";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:8080/api/v1/";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={AuthStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
