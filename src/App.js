import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ResetStyle, GlobalStyle } from "./components/styles/globalStyle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleWork from "./pages/SingleWork";
import Error from "./pages/Error";

const Layout = () => {
  return (
    <>
      <Router>
        <ResetStyle />
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work/:id">
            <SingleWork />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
function App() {
  return (
    <Suspense fallback="loading">
      <Layout />
    </Suspense>
  );
}

export default App;
