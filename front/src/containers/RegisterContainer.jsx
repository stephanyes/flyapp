import React from "react";

export default () => (
  <div>
    <div className="row align-items-center">
      <div className="col">
        <form>
          <div className="form-group">
            <h2>Register</h2>
            <label for="inputFirstName">First name</label>
            <input type="text" className="form-control" id="inputFirstName" />
          </div>
          <div className="form-group">
            <label for="inputLastName">Last name</label>
            <input type="text" className="form-control" id="inputLastName" />
          </div>
          <div className="form-group">
            <label for="inputAdressLine1">Address line 1</label>
            <input type="text" className="form-control" id="inputAdressLine1" />
          </div>
          <div className="form-group">
            <label for="inputAdressLine2">Address line 2</label>
            <input type="text" className="form-control" id="inputAdressLine2" />
          </div>
          <div className="form-group">
            <label for="inputAdressLine3">Address line 3</label>
            <input type="text" className="form-control" id="inputAdressLine3" />
          </div>
          <div className="form-group">
            <label for="inputPostcode">Postcode</label>
            <input type="text" className="form-control" id="inputPostcode" />
          </div>
          <div className="form-group">
            <label for="inputPhone">Phone</label>
            <input type="number" className="form-control" id="inputPhone" />
          </div>
          <div className="form-group">
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
            <label for="inputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      <div className="col">
        <img
          src="https://insideone.s3-sa-east-1.amazonaws.com/register-image.png"
          className="img-fluid"
          alt="Responsive image"
        />
      </div>
    </div>
  </div>
);
