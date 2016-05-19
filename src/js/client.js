import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// LAYOUT
import Layout from "./pages/Layout";

// ALL PAGES
import App from "./pages/App";
import About from "./pages/About";

const wrapper = document.getElementById('wrapper');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}></IndexRoute>
      <Route path="/about" component={About}></Route>
    </Route>
  </Router>,
wrapper);
