import { useState } from "react";
import "./user.css";
import CalendarToday from "@material-ui/icons/CalendarToday";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import PermIdentity from "@material-ui/icons/PermIdentity";
import MailOutline from "@material-ui/icons/MailOutline";
import Publish from "@material-ui/icons/Publish";
import LocationSearching from "@material-ui/icons/LocationSearching";
import { useEditContext } from "../../lib/edit/EditContext";
import { Link } from "react-router-dom";
import * as API from "../../api/user/user";

export default function User() {
  const { user } = useEditContext();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [userEdit, setUserEdit] = useState({
    username: user?.userName,
    displayName: user?.displayName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log(userEdit);
      const res = await API.editUser(user.id, userEdit);

      console.log(res);
      if (res.status === 200) {
        setMessage("User edited successfully.");
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">{user?.displayName}</span>
              <span className="userShowUserTitle">Software Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.displayName}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">11.11.1998</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">
                {user?.phoneNumber ? user?.phoneNumber : "No phone"}
              </span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Kosove | Gjilan</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <p>{message}</p>
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, username: e.target.value })
                  }
                  value={userEdit.username}
                />
              </div>
              <div className="userUpdateItem">
                <label>DisplayName</label>
                <input
                  type="text"
                  placeholder="DisplayName "
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, displayName: e.target.value })
                  }
                  value={userEdit.displayName}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="user@gmail.com"
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, email: e.target.value })
                  }
                  value={userEdit.email}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="04444444444 "
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, phoneNumber: e.target.value })
                  }
                  value={userEdit.phoneNumber}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className=" userupdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={handleClick}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
