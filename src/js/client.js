import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// LAYOUT
import Layout from "./pages/Layout";

// ALL PAGES
import Home from "./pages/Home";
import About from "./pages/About";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/about" component={About}></Route>
    </Route>
  </Router>,
app);
