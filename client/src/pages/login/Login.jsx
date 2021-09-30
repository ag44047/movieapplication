import { useState } from "react";
import "./login.scss";
import llogo from "../../images/llogo.png";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useHistory } from "react-router";

export default function Login() {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onLogin = (e) => {
    e.preventDefault();

    login(email, password);
    console.log("shtyped");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={llogo} alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={onLogin}>
            Sign In
          </button>
          <span>
            New to Movie?{" "}
            <b onClick={() => history.push("/register")}>Sign up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
}
