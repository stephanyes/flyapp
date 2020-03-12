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
  handlePhone,
  state
}) => (
  <div>
    <div
      className="row align-items-center"
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div className="col">
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "40px",
            marginLeft: "20px"
          }}
        >
          <h1
            className="font-weight-bold"
            style={{
              paddingBottom: "20px"
            }}
          >
            Register
          </h1>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputFirstName">First Name</label>
              <input
                onChange={handleFirstName}
                name="firstName"
                type="text"
                className="form-control"
                id="inputFirstName"
                style={
                  state.error && !state.firstName
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
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
                style={
                  state.error && !state.lastName
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
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
                style={
                  state.error && !state.password
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              onChange={handlePhone}
              name="phone"
              type="number"
              className="form-control"
              id="inputPhone"
              placeholder="+54 9 11 ..."
              style={
                state.error && !state.phone
                  ? {
                      borderColor: "red"
                    }
                  : null
              }
            />
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
              style={
                state.error && !state.address1
                  ? {
                      borderColor: "red"
                    }
                  : null
              }
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
              style={
                state.error && !state.address2
                  ? {
                      borderColor: "red"
                    }
                  : null
              }
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
                style={
                  state.error && !state.address3
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
              />
            </div>

            <div
              className="form-group col-md-4"
              style={{
                paddingBottom: "20px"
              }}
            >
              <label for="inputZip">Zip</label>
              <input
                onChange={handlePostCode}
                name="postCode"
                type="number"
                className="form-control"
                id="inputZip"
                style={
                  state.error && !state.postCode
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6"
            }}
          >
            Register
          </button>
          {state.error ? (
            <div>
              <br />
              <p>Please fill out all fields</p>
            </div>
          ) : null}
        </form>
      </div>
      <div className="col">
        <img
          style={{
            maxHeight: "660px"
          }}
          src="https://insideone.s3-sa-east-1.amazonaws.com/register-image-x2.png"
          className="img-fluid"
          alt="Responsive image"
        />
      </div>
    </div>
  </div>
);
