import React from "react";
import { Link } from "react-router-dom";

export default ({ categories }) => {
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
            Categories
          </h1>
          <h5 className="font-weight-normal">
            These are the categories of your site.
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
        to="/"
      >
        New
      </Link>
      <ul class="list-group">
        {categories.length ? (
          categories.map(category => {
            return (
              <li class="list-group-item d-flex justify-content-between align-items-center">
                {category.name}
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
                    Edit
                  </Link>
                  <Link
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "#EA526F",
                      borderColor: "#EA526F"
                    }}
                    to="/users"
                  >
                    Delete
                  </Link>
                </div>
              </li>
            );
          })
        ) : (
          <li>No Categories Found</li>
        )}
      </ul>
      {/* <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Categorie 1
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
              Edit
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/users"
            >
              Delete
            </Link>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Categorie 2
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
              Edit
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/users"
            >
              Delete
            </Link>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Categorie 3
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
              Edit
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/users"
            >
              Delete
            </Link>
          </div>
        </li>
      </ul> */}
    </div>
  );
};
