import React, { Suspense } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ResetStyle, GlobalStyle } from "./components/styles/globalStyle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import SingleWork from "./pages/SingleWork";
import Error from "./pages/Error";
import Loading from "./components/Loading";
import SideNavbar from "./components/SideNavbar";

const Layout = () => {
  const location = useLocation();

  function _ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <>
      {/* <Router> */}
      <ResetStyle />
      <GlobalStyle />
      <Navbar />
      <SideNavbar />
      <ScrollToTop />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/work/:id" component={SingleWork} />
          <Route path="*" component={Error} />
        </Switch>
      </AnimatePresence>
      {/* </Router> */}
    </>
  );
};
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout />
    </Suspense>
  );
}

export default App;
