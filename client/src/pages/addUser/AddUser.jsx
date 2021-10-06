import { useState } from "react";
import * as API from "../../api/user/user";
import "./addUser.css";

export default function NewUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [registerUser, setRegisterUser] = useState({
    displayName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      console.log(registerUser);

      const res = await API.register({ ...registerUser });
      console.log(res);
      if (res.status === 200) {
        setError(undefined);
      }
    } catch (err) {
      setError(err);
      throw new Error(
        "Something wrong happened while registering a new user from dashboard."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <h6>Loading...</h6>;
  if (error) return <h6>Something wrong happened!</h6>;

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Display name:</label>
          <input
            type="text"
            placeholder="Ex: John Doe"
            name="displayName"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="johndoe"
            name="username"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="johndoe@example.com"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder=""
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
