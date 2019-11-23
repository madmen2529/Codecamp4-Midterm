import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

ReactDOM.render(<App />, document.getElementById("app1"));
ReactDOM.render(<App2 />, document.getElementById("app2"));
ReactDOM.render(<App3 />, document.getElementById("app3"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
