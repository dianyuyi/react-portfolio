import React, { Suspense } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  ResetStyle,
  GlobalStyle,
} from "./components/styles/common/globalStyle";
import { Navbar, Loading, Footer, SideNavbar } from "./components";
import { Home, About, Works, Contact, SingleWork, Error } from "./pages";

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
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Error} />
        </Switch>
      </AnimatePresence>
      <Footer />
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
