import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { useState, useEffect } from "react";

export const Routes = () => {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    if (token) {
      setAuthenticate(true);
    }
  }, [authenticate]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticate={authenticate} />
      </Route>
      <Route path="/register">
        <Register authenticate={authenticate} />
      </Route>
      <Route path="/login">
        <Login authenticate={authenticate} setAuthenticate={setAuthenticate} />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticate={authenticate}
          setAuthenticate={setAuthenticate}
        />
      </Route>
      <Route>
        <NotFound authenticate={authenticate} />
      </Route>
    </Switch>
  );
};
