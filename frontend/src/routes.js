import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MostraUsuarios from './pages/MostraUsuarios'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/signup" component={SignUp} />
      <PrivateRoute path="/users" component={MostraUsuarios} />
      <PrivateRoute path="/dashboard" component={() => <h1>Dashboard</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
