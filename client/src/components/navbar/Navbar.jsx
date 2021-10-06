import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.scss";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext";

const Navbar = () => {
  const history = useHistory();

  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuthContext();
  //whenever we scroll, is gonna run this function
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    //cleanup function se perndryshe bohet loop
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <MovieIcon />
          <Link to="/" className="link">
            <span>HomePage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <Link to="/contactUs" className="link">
            <span>Contact Us</span>
          </Link>
          <Link to="/dashboard" className="link">
            <span>Dashboard</span>
          </Link>
          
        </div>
        <div className="right">
          {user && (
            <>
              <SearchIcon className="icon" />
              <span>{user.displayName}</span>
              <AccountCircleIcon className="icon" />
              <div className="profile">
                <ArrowDropDownIcon className="icon" />
                <div className="options">
                <Link to="/myProfile" className="link">
            <span>My Profile</span>
          </Link>
                  <span
                    onClick={() => {
                      history.push("/login");
                      logout();
                    }}
                  >
                    Log out
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
