import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
// import SingleWork from "./pages/SingleWork";
import Error from "./pages/Error";

export const RouterConfig = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/Works",
    component: Works,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/Error",
    component: Error,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
];
