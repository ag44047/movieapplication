import "./App.scss";
import { Home } from "./pages/home/Home";
import Register from "./pages/register/Register";
import { WatchPage } from "./pages/watch/WatchPage";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {

  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
            <Route path="/watchPage">
              <WatchPage />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}
export default App;
