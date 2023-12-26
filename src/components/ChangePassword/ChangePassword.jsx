import React from "react";
import "./ChangePassword.css";

function ChangePassword() {
  return (
    <div className="containerr sign-up-mode">
      <div className="forms-containerr">
        <div className="signin-signup" style={{ left: "50%", zIndex: "99" }}>
          <form method="POST" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="Password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="Conf-Password"
                placeholder="Confirm Password"
              />
            </div>
            <input type="submit" name="submit" className="btnn" value="Save" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
