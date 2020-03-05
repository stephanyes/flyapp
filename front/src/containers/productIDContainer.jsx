import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <div>
    <div
      className="row aling-items-center"
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div
        className="col"
        style={{
          padding: "40px"
        }}
      >
        <div
          className="jumbotron"
          style={{
            backgroundColor: "#ffffff"
          }}
        >
          <h4>****</h4>
          <h1
            className="font-weight-bold"
            style={{
              paddingBottom: "10px"
            }}
          >
            Fly to Dubai!
          </h1>

          <p
            className="font-weight-normal"
            style={{
              paddingBottom: "20px"
            }}
          >
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <h5
            className="font-weight-normal"
            style={{
              paddingBottom: "20px",
              marginBottom: "20px"
            }}
          >
            u$S 6.500
          </h5>
          <Link
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6"
            }}
            to="/cart"
          >
            Add to Cart
          </Link>
        </div>
      </div>

      <div className="col">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="img-fluid"
          alt="Responsive image"
        />
      </div>
    </div>
  </div>
);
