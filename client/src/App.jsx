import { useState, useEffect } from "react";
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
import axios from "axios";
import Dashboard from "./pages/dashboard/Dashboard";
import { useAuthContext } from "./lib/context/AuthContext";
import MovieList from "./pages/movieList/MovieList";

function App() {
  const { user, isLoading } = useAuthContext();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? (
            <Home />
          ) : isLoading || !user ? (
            <h4>Loading...</h4>
          ) : (
            <Redirect to="/login" />
          )}
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
            <Route path="/new-and-popular">
              <MovieList />
            </Route>
            <Route path="/mylist">
              <MovieList />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/dashboard/users">
              <Dashboard />
            </Route>
            <Route path="/dashboard/user/:userId">
              <Dashboard />
            </Route>
            <Route path="/dashboard/newUser">
              <Dashboard />
            </Route>
            <Route path="/dashboard/movies">
              <Dashboard />
            </Route>
            <Route path="/dashboard/movie/:moveiId">
              <Dashboard />
            </Route>
            <Route path="/dashboard/newproduct">
              <Dashboard />
            </Route>
            <Route path="/watchPage">
              <WatchPage />
            </Route>
          </>
        )}
        <Route path="*">We have no such page like this</Route>
      </Switch>
    </Router>
  );
}
export default App;
