import React from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <ParallaxProvider>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </ParallaxProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.register();
