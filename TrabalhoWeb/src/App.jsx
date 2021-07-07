import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import {RankingPage } from "./pages/Ranking";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
        </Switch>
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
        </Switch>
        <Switch>
          <Route path="/rank" component={RankingPage}></Route>
        </Switch>

      </Router>
    </>
  );
};
