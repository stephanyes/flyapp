import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <Link className="navbar-brand" to="/">
        <img
          src="https://insideone.s3-sa-east-1.amazonaws.com/flyapp-logo.png"
          height="40"
          alt=""
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/experiences">
              Experiences
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/experience">
              Unique Product
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/profile">
              My Account
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/cart">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/buy-cart-black.png"
                height="20"
                alt=""
              />
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            style={{
              color: "#2EC4B6",
              borderColor: "#2EC4B6"
            }}
            type="submit"
          >
            Search
          </button> */}
        </form>
      </div>
    </nav>
  </div>
);
