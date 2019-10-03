import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//all imports including react,react dom,components using ./


//this is index.js  so it would always have reactdom.render( inside this first <App />, and then
//document.querySelector("#root") );
ReactDOM.render( <App /> , document.querySelector("#root") );