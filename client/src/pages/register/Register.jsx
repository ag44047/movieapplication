import { useRef, useState } from "react";
import "./register.scss";
import llogo from "../../images/llogo.png";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
    displayName: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  // const handleStart = () => {
  //   setEmail(emailRef.current.value);
  // };
  // const handleFinish = () => {
  //   setPassword(passwordRef.current.value);
  // };

  const handleChange = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
    // console.log(registerUser);
  };

  const handleSubmit = () => {
    console.log(registerUser);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={llogo} alt="" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. </h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="email address"
              onChange={handleChange}
            />
            <button className="registerButton" onClick={handleSubmit}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
            />
            <button className="registerButton" type="submit">
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
