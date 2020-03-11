import React from "react";
import { Link } from "react-router-dom";
import { FIND_CATEGORY } from "../store/reducers/constants";

export default ({ products, handleDelete }) => {
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
            Products
          </h1>
          <h5 className="font-weight-normal">
            These are the products of your site.
          </h5>
        </div>
      </div>
      <Link
        className="btn btn-primary btn-lg"
        style={{
          backgroundColor: "#2EC4B6",
          borderColor: "#2EC4B6",
          margin: "20px",
          width: "200px"
        }}
        to="/newProductAdmin"
      >
        New
      </Link>
      <ul class="list-group">
        {products
          ? products.map(product => (
              <li
                key={product.id}
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <span
                    style={{
                      margin: "20px"
                    }}
                  >
                    {product.name}
                  </span>
                  <span
                    style={{
                      margin: "20px"
                    }}
                  >
                    {`Stock: ${product.stock}`}
                  </span>
                  <span
                    style={{
                      margin: "20px"
                    }}
                  >
                    {`Price: U$D${product.price}`}
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
                    to={`/editProducts/${product.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "#EA526F",
                      borderColor: "#EA526F"
                    }}
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          : "No Products"}
      </ul>
    </div>
  );
};
