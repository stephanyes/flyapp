import React from "react";
import { Link } from "react-router-dom";

export default ({
  handleChange,
  user,
  dropdown,
  open,
  handleSubmit,
  logout
}) => {
  const menuClass = `dropdown-menu${dropdown ? " show" : ""}`;
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
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
              <Link className="nav-link" to="/category">
                Categories
              </Link>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
            <input
              onChange={handleChange}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <ul className="navbar-nav mr-auto">
              {user.firstName ? (
                <div className="dropdown" onClick={open}>
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    style={{
                      backgroundColor: "#2EC4B6",
                      borderColor: "#2EC4B6"
                    }}
                  >
                    {user.firstName}
                  </button>
                  <div
                    className={`${menuClass} dropdown-menu-right`}
                    //dropdown-menu-right lo mantiene adentro de la pag
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    {user.rol_id === "client" ? null : (
                      //si no es cliente mostra Edit Products
                      <div className="dropdown">
                        <Link className="dropdown-item" to="/orders">
                          Orders
                        </Link>
                        <Link className="dropdown-item" to="/editProducts">
                          Experiences
                        </Link>
                        <Link className="dropdown-item" to="/categoriesAdmin">
                          Categories
                        </Link>
                      </div>
                    )}
                    {user.rol_id === "superAdmin" ? (
                      //si es superAdmin mostra Edit Users
                      <Link className="dropdown-item" to="/editUsers">
                        Users
                      </Link>
                    ) : null}
                    <p className="dropdown-item" href="#nogo" onClick={logout}>
                      Logout
                    </p>
                  </div>
                </div>
              ) : (
                  <ul className="navbar-nav mr-auto">
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
                  </ul>
                )}
              <li className="nav-item active">
                <Link className="nav-link" to="/cart">
                  <img
                    src="https://insideone.s3-sa-east-1.amazonaws.com/buy-cart-black.png"
                    height="20"
                    alt=""
                  />
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="badge badge-pill badge-primary"
                  style={{
                    backgroundColor: "#2EC4B6",
                    borderColor: "#2EC4B6"
                  }}
                  to="/cart"
                >
                  {/* Remplazar por numero real de cantidad de experiencias en carrito */}
                  9
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};
