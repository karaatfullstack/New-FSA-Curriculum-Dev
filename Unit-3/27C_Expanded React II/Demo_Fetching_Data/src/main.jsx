import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

// Render the root component of the application
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> {/* Render the App component */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") // Mount the application in the DOM root element
);
