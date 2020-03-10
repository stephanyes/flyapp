import React from "react";
import { Link } from "react-router-dom";

export default ({ handleClick }) => (
  <div
    style={{
      backgroundColor: "white"
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
          Profile
        </h1>
        <h5
          className="font-weight-normal"
          style={{
            marginBottom: "20px"
          }}
        >
          This is your actual profile.
        </h5>
      </div>
    </div>
    <div
      className="container"
      style={{
        padding: "20px"
      }}
    >
      <h3 className="font-weight-bold">Previous purchases</h3>
    </div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <span
            style={{
              margin: "20px"
            }}
          >
            This is a previous purchase.
          </span>
          <span
            style={{
              margin: "20px"
            }}
          >
            Quantity of Experiencies
          </span>
          <span
            style={{
              margin: "20px"
            }}
          >
            Price
          </span>
        </div>

        <div>
          <Link
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6"
            }}
            to="/review"
          >
            Leave a Review
          </Link>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <span
            style={{
              margin: "20px"
            }}
          >
            This is a previous purchase.
          </span>
          <span
            style={{
              margin: "20px"
            }}
          >
            Quantity of Experiencies
          </span>
          <span
            style={{
              margin: "20px"
            }}
          >
            Price
          </span>
        </div>
        <div>
          <Link
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6"
            }}
            to="/review"
          >
            Leave a Review
          </Link>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <span
            style={{
              margin: "20px"
            }}
          >
            This is a previous purchase.
          </span>
          <span
            style={{
              margin: "20px"
            }}
          >
            Quantity of Experiencies
          </span>
          <span
            style={{
              margin: "20px"
            }}
          >
            Price
          </span>
        </div>
        <div>
          <Link
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6"
            }}
            to="/review"
          >
            Leave a Review
          </Link>
        </div>
      </li>
    </ul>
  </div>
);
