import React from "react-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import Adminhome from "../adminhome/Adminhome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../userList/UserList";
import User from "../user/User";
import NewUser from "../newUser/NewUser";
import MovieList from "../movieList/MovieList";
import Movie from "../movie/Movie";
import AddUser from "../addUser/AddUser";
import AddMovie from "../addMovie/AddMovie";
import AddList from "../addList/AddList";
import ListList from "../listList/ListList";
import List from './../../components/list/List';
import Listtt from './../listtt/Listtt';


export default function Dashboard() {
  return (
    <Router>
      <div className="containerB">
        <Navbar />
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
          <Route path="/dashboard/addUser">
            <AddUser />
          </Route>
          <Route path="/dashboard/addMovie">
            <AddMovie />
          </Route>
          <Route path="/dashboard/addList">
            <AddList />
          </Route>
          <Route path="/dashboard/listList">
            <ListList />
          </Route>
          <Route path="/dashboard/listtt/:listttId">
            <Listtt />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
