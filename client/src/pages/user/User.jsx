import "./user.css";
import CalendarToday from '@material-ui/icons/CalendarToday';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import PermIdentity from '@material-ui/icons/PermIdentity';
import MailOutline from '@material-ui/icons/MailOutline';
import Publish from '@material-ui/icons/Publish';
import LocationSearching from '@material-ui/icons/LocationSearching';
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Doruntina Korca</span>
                            <span className="userShowUserTitle">Software Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">

                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Doruntina</span>
                        </div>
                        <div className="userShowInfo">
                            < CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">11.11.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            < PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+38344123222</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">Doruntina@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Kosove | Gjilan</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="Username" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" placeholder="Fullname " className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="user@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="04444444444 " className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="address " className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className=" userupdateIcon" />

                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
