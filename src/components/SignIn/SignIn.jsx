import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
// import Log from "./../../assets/log.svg";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="containerr">
      <div className="forms-containerr">
        <div className="signin-signup">
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="Forget-Pass">
              <Link
                to="/ForgotPassword"
                className="Forget"
                id="sign-in-btn"
                style={{ padding: "10px 20px", textDecoration: "none" }}
              >
                Forgot Password ?
              </Link>
            </div>
            <button type="submit" name="submit" className="btnn solid">
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="panels-containerr">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Link
              to="/signup"
              className="btnn transparent"
              id="sign-in-btn"
              style={{ padding: "10px 20px", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </div>
          {/* <img src={Log} className="image" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
