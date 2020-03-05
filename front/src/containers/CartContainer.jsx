import React from "react";
import { Link } from "react-router-dom";

export default () => (
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
          Cart
        </h1>
        <h5 className="font-weight-normal">
          These are your selected experiences.
        </h5>
      </div>
    </div>

    <div
      className="card mb-3"
      style={{
        borderColor: "#ffffff"
      }}
    >
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            src="https://insideone.s3-sa-east-1.amazonaws.com/experience-london-image3-x3.png"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="font-weight-bold">Viaje a Dubai</h5>
            <p className="font-weight-normal">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="font-weight-bold">u$S 100 </p>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6"
              }}
              to="/cart"
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
