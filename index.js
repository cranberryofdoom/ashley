import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./scss/main.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
