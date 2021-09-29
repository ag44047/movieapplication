import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  PlayCircleOutline,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  AddToQueue,
} from "@material-ui/icons";
import { Link, useParams, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li
                className={`sidebarListItem ${pathname === "/dashboard" ? "active" : ""
                  }`}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/users" className="link">
              <li
                className={`sidebarListItem ${pathname === "/dashboard/users" ? "active" : ""
                  }`}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/dashboard/movies" className="link">
              <li
                className={`sidebarListItem ${pathname === "/dashboard/movies" ? "active" : ""
                  }`}
              >
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/dashboard/listList" className="link">
              <li
                className={`sidebarListItem ${pathname === "/dashboard/listList" ? "active" : ""
                  }`}
              >
                <AddToQueue className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/dashboard/addUser" className="link">
              <li
                className={`sidebarListItem ${pathname === "/dashboard/addUser" ? "active" : ""
                  }`}
              >
                <AddToQueue className="sidebarIcon" />
                Add User
              </li>
            </Link>
            <Link to="/dashboard/addMovie" className="link">
              <li
                className={`sidebarListItem ${pathname === "/dashboard/addMovie" ? "active" : ""
                  }`}
              >
                <AddToQueue className="sidebarIcon" />
                Add movie
              </li>
            </Link>
            <Link to="/dashboard/addList" className="link">
              <li
                className={`sidebarListItem ${pathname === "/dashboard/addList" ? "active" : ""
                  }`}
              >
                <AddToQueue className="sidebarIcon" />
                Add List
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${pathname === "/dashboard/mail" ? "active" : ""
                }`}
            >
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li
              className={`sidebarListItem ${pathname === "/dashboard/feedback" ? "active" : ""
                }`}
            >
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li
              className={`sidebarListItem ${pathname === "/dashboard/messages" ? "active" : ""
                }`}
            >
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${pathname === "/dashboard/manage" ? "active" : ""
                }`}
            >
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
