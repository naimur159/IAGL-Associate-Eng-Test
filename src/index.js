import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import TodoApp from "./TodoApp";

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById("root");

// Render the React application wrapped with Redux Provider
// This makes the Redux store available to all components
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);