import { Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import Route from "./route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route isPrivate path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};
