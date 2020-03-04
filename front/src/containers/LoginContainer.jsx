import React from "react";

export default () => (
  <div>
    <div className="row align-items-center">
      <div className="col">
        <img
          src="https://insideone.s3-sa-east-1.amazonaws.com/login-image.png"
          className="img-fluid"
          alt="Responsive image"
        />
      </div>
      <div className="col">
        <form>
          <div className="form-group">
            <h2>Login</h2>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
);
