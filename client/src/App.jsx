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
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user, isLoading, isAuthenticated } = useAuthContext();

  if (isLoading && !user) return <h6>Loading... please wait!</h6>;
  return (
    <Router>
      <ToastContainer />

      <Switch>
{isAuthenticated ? (
  <>
  </>
)}
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>

        <Route path="/movies" exact>
          <Home type="/movies" />
        </Route>
        <Route path="/series" exact>
          <Home type="/series" />
        </Route>
        <Route path="/contactUs" exact>
          <ContactUs />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/users" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/user/:userId" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/newUser" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/movies" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/listList" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/addMovie" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/addUser" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/movie/:moveiId" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/newMovie" exact>
          <Dashboard />
        </Route>
        <Route path="/watchPage" exact>
          <WatchPage />
        </Route>
        <Route path="/myProfile" exact>
          <MyProfile />
        </Route>

        <Route path="*">We have no such page like this</Route>
      </Switch>

    </Router>
  );
}
export default App;
