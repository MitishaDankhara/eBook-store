import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <section className="Login_page">
      <div className="container">
        <div className="Login_form">
          <form>
            <div className="user_name">
              <input
                type="text"
                name="UserName"
                placeholder="Please Enter Your Name..."
                className="input"
              />
            </div>
            <div className="user_email">
              <input
                type="email"
                name="Email"
                placeholder="Please Enter Your Email..."
                className="input"
              />
            </div>
            <div className="password">
              <input
                type="password"
                name="Password"
                placeholder="Please Enter Password..."
                className="input"
              />
            </div>
            <div className="btn">Login</div>
            <div className="sign_up">
              Already have an Account?{" "}
              <Link to={"/signup"}>
                <span>Signup</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
