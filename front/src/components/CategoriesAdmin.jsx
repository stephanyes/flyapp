import React from "react";
import { Link } from "react-router-dom";

export default ({ categories, handleDelete, handleSelect }) => {
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
        to="/newCategoryAdmin"
      >
        New
      </Link>
      <ul class="list-group">
        {categories.length ? (
          categories.map(category => {
            return (
              <li
                key={category.id}
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {category.name}
                <div>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "#2EC4B6",
                      borderColor: "#2EC4B6",
                      marginRight: "20px"
                    }}
                    // to="/editCategoryAdmin"
                    onClick={() => handleSelect(category.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "#EA526F",
                      borderColor: "#EA526F"
                    }}
                    onClick={() => handleDelete(category.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <li>No Categories Found</li>
        )}
      </ul>
    </div>
  );
};
