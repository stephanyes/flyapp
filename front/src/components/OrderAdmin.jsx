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
            Order #NUMBER
          </h1>
          <h5 className="font-weight-normal">This is the order #NUMBER.</h5>
        </div>
      </div>
      <h2
        className="font-weight-bold"
        style={{
          padding: "20px"
        }}
      >
        Details
      </h2>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Client:
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              John Doe
            </span>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Mail:
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              johndoe@gmail.com
            </span>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Direction:
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              3245 Main St, Florida
            </span>
          </div>
        </li>
        <h2
          className="font-weight-bold"
          style={{
            padding: "20px"
          }}
        >
          Experiences
        </h2>
        <div
          class="card mb-3"
          style={{
            marginLeft: "40px"
          }}
        >
          <div class="row no-gutters">
            <div class="col-md-1">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/experience-parachute-image-x3.png"
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-11">
              <div class="card-body">
                <h5 className="font-weight-bold">Title</h5>
                <p className="font-weight-normal">Quantity</p>
                <p className="font-weight-bold">u$S Price </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card mb-3"
          style={{
            marginLeft: "40px"
          }}
        >
          <div class="row no-gutters">
            <div class="col-md-1">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/experience-parachute-image-x3.png"
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-11">
              <div class="card-body">
                <h5 className="font-weight-bold">Title</h5>
                <p className="font-weight-normal">Quantity</p>
                <p className="font-weight-bold">u$S Price </p>
              </div>
            </div>
          </div>
        </div>
        <h2
          className="font-weight-bold"
          style={{
            padding: "20px"
          }}
        >
          Status
        </h2>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Purchased XX:XX hs
            </span>
          </div>
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",

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
              Sent XX:XX hs
            </span>
          </div>
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",

                borderColor: "#2EC4B6",

                width: "265px"
              }}
              to="/users"
            >
              Complete
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
              Cancelled XX:XX hs
            </span>
          </div>
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#2EC4B6",
                borderColor: "#2EC4B6",
                width: "265px"
              }}
              to="/users"
            >
              Contact Client
            </Link>
          </div>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          style={{
            paddingTop: "22px",
            paddingBottom: "22px",
            marginBottom: "40px"
          }}
        >
          <div>
            <span
              style={{
                margin: "20px",
                marginBottom: "20px"
              }}
            >
              Completed XX:XX hs
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
