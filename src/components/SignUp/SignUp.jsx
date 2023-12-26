import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email, password).then(
        (response) => {
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
    // window.location.reload();
    // navigate("/login");
    // window.location.reload();
  };

  return (
    <div className="containerr sign-up-mode">
      <div className="forms-containerr">
        <div className="signin-signup">
          <form onSubmit={handleSignup} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" name="submit" className="btnn solid">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="panels-containerr">
        <div className="panel left-panel"></div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Link
              to="login"
              className="btnn transparent"
              id="sign-in-btn"
              style={{ padding: "10px 20px", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </div>
          {/* <img src="src/assets/register.svg" className="image" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
