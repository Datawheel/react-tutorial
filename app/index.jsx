require.context("../img/", true, /^\.\/.*\.(png|svg)/);
import "../styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("component"));
