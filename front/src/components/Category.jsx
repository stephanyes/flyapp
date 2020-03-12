import React from "react";
import { Link } from "react-router-dom";

export default ({ categorias }) => {
  return (
    <div>
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
            Categories
          </h1>
          <h5 className="font-weight-normal">
            We give you a lot of special experiences for your enjoy!
          </h5>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px"
        }}
      >
        <div className="card-columns">
          {categorias
            ? categorias.map(singles => (
              <Link
                key={singles.id}
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
                to={`/category/${singles.id}`}
              >
                <div
                  className="card"
                  style={{
                    marginBottom: "25px"
                  }}
                  key={singles.id}
                >
                  <img src={singles.img} className="card-img-top" alt="..." />
                </div>
              </Link>
            ))
            : null}
        </div>
      </div>
    </div>
  );
};
