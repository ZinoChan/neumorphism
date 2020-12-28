import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
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
      </Switch>
    </>
  );
};

export default AppRoute;
