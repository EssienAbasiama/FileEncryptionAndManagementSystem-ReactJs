import React from "react";
import "./ForgetPassword.css";

function ForgetPassword() {
  return (
    <div className="containerr">
      <div className="forms-container">
        <div className="signin-signup" style={{ left: "50%", zIndex: "99" }}>
          <form action="" method="POST" className="sign-in-form">
            <h2 className="title">Forget Password</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <input
              type="submit"
              name="submit"
              value="Send"
              className="btnn solid"
            />
            <p className="social-text">Or Sign in with social platforms</p>
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

export default ForgetPassword;
