import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Common/Header/Header";
import MainContent from "./components/Common/MainContent/MainContent";
import Html from "./components/Page/Html/Html";
import Html5 from "./components/Page/Html/Html5";
import Css from "./components/Page/CSS/Css";
import Javascript from "./components/Page/JS/Javascript";
import Angular from "./components/Page/Angular/Angular";
import UnitTest from "./components/Page/UnitTest/UnitTest";
import BootStrap from "./components/Page/Bootstrap/Bootstrap";
import ReactJs from "./components/Page/ReactJS/Reactjs";

const routes = [
  {
    path: "/home",
    component: MainContent,
  },
  {
    path: "/html",
    component: Html,
  },
  {
    path: "/html5",
    component: Html5,
  },
  {
    path: "/css",
    component: Css,
  },
  {
    path: "/bootstrap",
    component: BootStrap,
  },
  {
    path: "/js",
    component: Javascript,
  },
  {
    path: "/angular",
    component: Angular,
  },
  {
    path: "/react",
    component: ReactJs,
  },
  {
    path: "/unittest",
    component: UnitTest,
  },

];
const fakeAuth = { isAuthenticated: true };
function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <div className="App">
        <CssBaseline></CssBaseline>
        <Header></Header>
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function RouteWithSubRoutes(route) {
  return (
    <PrivateRoute path={route.path}>
      <Route
        path={route.path}
        render={(props) => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    </PrivateRoute>
  );
}
const mapStateToProps = ({ ui, common }) => {
  return {
  };
};

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
