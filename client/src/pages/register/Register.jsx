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
        
        <form>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="DisplayName" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="registerButton" type="submit">
              Register
            </button>
            <span>
            Already have an account? <b>Sign in.</b>
          </span>
        </form>
      </div>
    </div>
  );
}
