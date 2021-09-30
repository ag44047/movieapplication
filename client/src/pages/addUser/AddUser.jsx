import "./addUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="Fullname" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="User@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="Password" placeholder="*******" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="Phone" placeholder="045123123" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="Address" placeholder="Address" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="Male" value="Male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="Female" value="Female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="Other" value="Other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
}
