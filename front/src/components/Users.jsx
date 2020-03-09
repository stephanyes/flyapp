import React from "react";
import { Link } from "react-router-dom";

export default ({}) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div
        className="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div
          className="card-body"
          style={{
            padding: "40px"
          }}
        >
          <h1
            className="font-weight-bold"
            style={{
              padding: "10px"
            }}
          >
            Users
          </h1>
          <h5 className="font-weight-normal">
            These are the users of your site.
          </h5>
        </div>
      </div>

      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          User 1
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/users"
            >
              Do Admin
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "red",
                borderColor: "red"
              }}
              to="/users"
            >
              Delete
            </Link>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          User 2
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/users"
            >
              Do Admin
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "red",
                borderColor: "red"
              }}
              to="/users"
            >
              Delete
            </Link>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          User 3
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/users"
            >
              Do Admin
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "red",
                borderColor: "red"
              }}
              to="/users"
            >
              Delete
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
