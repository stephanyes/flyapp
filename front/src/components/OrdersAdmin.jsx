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
            Orders
          </h1>
          <h5 className="font-weight-normal">These are the actual orders.</h5>
        </div>
      </div>

      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Number of Order 1
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              First and Last Name
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              Status
            </span>
          </div>

          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/order"
            >
              View
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px",
                width: "150px"
              }}
              to="/users"
            >
              Send
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/users"
            >
              Cancel
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
              Number of Order 2
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              First and Last Name
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              Status
            </span>
          </div>
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/order"
            >
              View
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px",
                width: "150px"
              }}
              to="/users"
            >
              Complete
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/users"
            >
              Cancel
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
              Number of Order 3
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              First and Last Name
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              Status
            </span>
          </div>
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/order"
            >
              View
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px",
                width: "150px"
              }}
              to="/users"
            >
              Send
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/users"
            >
              Cancel
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
