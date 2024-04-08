import React, { useState } from "react";
import "./header.scss";
import HeaderLogo from "../../assets/logo/bookstore-logo.jpg";
import { Link } from "react-router-dom";
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOnOpen = () => {
    setOpen(true);
  };
  const handleOnClose = () => {
    setOpen(false);
  };
  return (
    <header>
      <div className="container">
        <div className="header_alignment">
          <div className="header_logo">
            <Link to={"/"}>
              <img src={HeaderLogo} alt="Header_logo" />
            </Link>
          </div>
          <div className="header_menu">
            <ul>
              <li>
                Home
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </li>
              <li>Categories</li>
              <li>
                Shop
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </li>
              <li>
                Pages
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </li>
              <li>
                Blog
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </li>
              <li>
                Others
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </li>
            </ul>
          </div>
          <div className="header_btn">
            <Link to={"/login"}>
              <div className="login_btn">Log In</div>
            </Link>
            <Link to={"/signup"}>
              <div className="signup_btn">Sign Up</div>
            </Link>
            <div className="search_icon" onClick={handleOnOpen}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </div>
          </div>
          <div className={`search_bar ${open ? "active" : ""}`}>
            <input type="text" name="Search" placeholder="Search by Keywords" />
            <div className="close_icon" onClick={handleOnClose}>
              <svg
                stroke="#fff"
                fill="#fff"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
