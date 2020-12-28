import Home from "../pages/Home";
import Projects from "../pages/Projects";
import { Switch, Route } from "react-router-dom";

const AppRoute = ({ darkTheme }) => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home darkTheme={darkTheme} />
        </Route>
        <Route path='/projects' component={Projects} />
      </Switch>
    </>
  );
};

export default AppRoute;
