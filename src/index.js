import React from "react";
import ReactDOM from "react-dom"
import Page01 from "./pages/Page01";


const container = document.getElementById("root");
container ? ReactDOM.render(<Page01 />, container) : false;