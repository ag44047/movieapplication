import React from "react-dom";
import Sidebar from "../../components/sidebar/Sidebar";

import "./dashboard.css";
import Adminhome from "../adminhome/Adminhome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../userList/UserList";
import User from "../user/User";
import NewUser from "../newUser/NewUser";
import MovieList from "../movieList/MovieList";
import Movie from "../movie/Movie";
import NewMovie from "../newMovie/NewMovie";

export default function Dashboard() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Adminhome />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/movie/:moveiId">
            <Movie />
          </Route>
          <Route path="/newmovie">
            <NewMovie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
