import React from "react";
import { Link } from "react-router-dom";
export default ({
  handleSubmit,
  handleFirstName,
  handleEmail,
  handlePassword,
  handleLastName,
  handleAddress1,
  handleAddress2,
  handleAddress3,
  handlePostCode,
  handlePhone
}) => (
  <div>
    <div className="row align-items-center">
      <div className="col">
        {/* 
        
        <form>
          <div className="form-group">
            <h2>Register</h2>
            <label for="inputFirstName">First name</label>
            <input
              onChange={handleFirstName}
              name="firstName"
              type="text"
              className="form-control"
              id="inputFirstName"
            />
          </div>
          <div className="form-group">
            <label for="inputLastName">Last name</label>
            <input
              onChange={handleLastName}
              name="lastName"
              type="text"
              className="form-control"
              id="inputLastName"
            />
          </div>
          <div className="form-group">
            <label for="inputAdressLine1">Address line 1</label>
            <input
              onChange={handleAddress1}
              name="address1"
              type="text"
              className="form-control"
              id="inputAdressLine1"
            />
          </div>
          <div className="form-group">
            <label for="inputAdressLine2">Address line 2</label>
            <input
              onChange={handleAddress2}
              name="address2"
              type="text"
              className="form-control"
              id="inputAdressLine2"
            />
          </div>
          <div className="form-group">
            <label for="inputAdressLine3">Address line 3</label>
            <input
              onChange={handleAddress3}
              name="address3"
              type="text"
              className="form-control"
              id="inputAdressLine3"
            />
          </div>
          <div className="form-group">
            <label for="inputPostcode">Postcode</label>
            <input
              onChange={handlePostCode}
              name="postCode"
              type="text"
              className="form-control"
              id="inputPostcode"
            />
          </div>
          <div className="form-group">
            <label for="inputPhone">Phone</label>
            <input
              onChange={handlePhone}
              name="phone"
              type="number"
              className="form-control"
              id="inputPhone"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              onChange={handleEmail}
              name="email"
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
              onChange={handlePassword}
              name="password"
              type="password"
              className="form-control"
              id="inputPassword1"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
 */}

        <form>
          <h2>Register</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputFirstName">First Name</label>
              <input
                onChange={handleFirstName}
                name="firstName"
                type="text"
                className="form-control"
                id="inputFirstName"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputLastName">Last Name</label>
              <input
                onChange={handleLastName}
                name="lastName"
                type="text"
                className="form-control"
                id="inputLastName"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                onChange={handleEmail}
                name="email"
                type="email"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                onChange={handlePassword}
                name="password"
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              onChange={handleAddress1}
              name="address1"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              onChange={handleAddress2}
              name="address2"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label for="inputCity">City</label>
              <input
                onChange={handleAddress3}
                name="address3"
                type="text"
                className="form-control"
                id="inputCity"
              />
            </div>

            <div className="form-group col-md-4">
              <label for="inputZip">Zip</label>
              <input
                onChange={handlePostCode}
                name="postCode"
                type="text"
                className="form-control"
                id="inputZip"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
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
