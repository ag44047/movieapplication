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
import NewProduct from "../newMovie/NewMovie";

export default function Dashboard() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/dashboard">
            <Adminhome />
          </Route>
          <Route path="/dashboard/users">
            <UserList />
          </Route>
          <Route path="/dashboard/user/:userId">
            <User />
          </Route>
          <Route path="/dashboard/newUser">
            <NewUser />
          </Route>
          <Route path="/dashboard/movies">
            <MovieList />
          </Route>
          <Route path="/dashboard/movie/:moveiId">
            <Movie />
          </Route>
          <Route path="/dashboard/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
