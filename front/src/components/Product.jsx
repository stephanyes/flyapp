import React from "react";
import { Link } from "react-router-dom";

export default ({ producto, storing }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div
        className="row aling-items-center"
        style={{
          backgroundColor: "#ffffff"
        }}
      >
        <div
          className="col"
          style={{
            padding: "40px",
            backgroundColor: "#ffffff",
            paddingBottom: "200px"
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
              {producto.name}
            </h1>

            <p
              className="font-weight-normal"
              style={{
                paddingBottom: "20px"
              }}
            >
              {producto.description}{" "}
            </p>
            <h5
              className="font-weight-normal"
              style={{
                paddingBottom: "20px",
                marginBottom: "20px"
              }}
            >{`U$D ${producto.price}`}</h5>

            <Link
              onClick={e => storing(e, producto)}
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/experiences"
            >
              Add to Cart
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/checkout"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>

        <div className="col">
          <img
            style={{
              height: "660px",
              position: "fixed",
              right: "0"
            }}
            src={producto.img_1}
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
    </div>
  );
};
