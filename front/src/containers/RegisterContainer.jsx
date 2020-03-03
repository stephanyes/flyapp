import React from "react";

export default () => (
  <div>
    <div className="row align-items-center">
      <div className="col">
        <form>
          <div className="form-group">
            <h2>Register</h2>
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
            Submit
          </button>
        </form>
      </div>
      <div className="col">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          className="img-fluid"
          alt="Responsive image"
        />
      </div>
    </div>
  </div>
);
