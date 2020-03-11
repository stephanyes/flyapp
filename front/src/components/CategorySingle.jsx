import React from "react";
import { Link } from "react-router-dom";

export default ({ products }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "40px"
      }}
    >
      <div className="card-columns">
        {products
          ? products.map(single => (
              <div
                className="card"
                style={{
                  marginBottom: "25px"
                }}
                key={single.id}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                  to={`/experience/${single.id}`}
                >
                  <img src={single.img_1} className="card-img-top" alt="..." />

                  <div className="card-body">
                    <h5 className="font-weight-bold">{single.name}</h5>
                    <p className="font-weight-normal">{single.description}</p>
                    <p className="font-weight-bold">u$S {single.price}</p>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
