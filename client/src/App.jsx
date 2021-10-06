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
import ContactUs from "./pages/contactUs/ContactUs";
import MyProfile from "./pages/myProfile/MyProfile";
import { useAuthContext } from "./lib/context/AuthContext";
import MovieList from "./pages/movieList/MovieList";

function App() {
  const { user, isLoading } = useAuthContext();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
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
              <Home type="/movies" />
            </Route>
            <Route path="/series">
              <Home type="/series" />
            </Route>
            <Route path="/contactUs">
            <ContactUs/>
            </Route>
            <Route path="/dashboard">
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
            <Route path="/dashboard/listList">
              <Dashboard />
            </Route>
            <Route path="/dashboard/addMovie">
              <Dashboard />
            </Route>
            <Route path="/dashboard/addUser">
              <Dashboard />
            </Route>
            <Route path="/dashboard/movie/:moveiId">
              <Dashboard />
            </Route>
            <Route path="/dashboard/newMovie">
              <Dashboard />
            </Route>
            <Route path="/watchPage">
              <WatchPage />
            </Route>
            <Route path="/myProfile">
              <MyProfile />
            </Route>
          </>
        )}
        <Route path="*">We have no such page like this</Route>
      </Switch>
    </Router>
  );
}
export default App;
