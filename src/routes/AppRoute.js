import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

import { Switch, Route } from "react-router-dom";

const AppRoute = ({ darkTheme }) => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home darkTheme={darkTheme} />
        </Route>
        <Route path='/projects' component={Projects} />
        <Route path='/about'>
          <About darkTheme={darkTheme} />
        </Route>
        <Route path='/contact' component={Contact} />
      </Switch>
    </>
  );
};

export default AppRoute;
