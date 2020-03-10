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
            New Categorie
          </h1>
          <h5 className="font-weight-normal">
            Create a new categorie to your site.
          </h5>
        </div>
      </div>
      <form
        style={{
          padding: "40px",
          paddingBottom: "0px"
        }}
      >
        <div className="form-group">
          <label for="inputNameOfExperience">Name of categorie</label>
          <input
            //  onChange={handleAddress1}
            name="nameOfCategorie"
            type="text"
            className="form-control"
            id="inputNameOfCategorie"
            placeholder="Dinner"
          />
        </div>
        <div className="form-group">
          <label for="inputImageUrl">Image URL</label>
          <input
            //   onChange={handleAddress2}
            name="imageUrl"
            type="text"
            className="form-control"
            id="inputImageUrl"
            placeholder="https://www..."
          />
        </div>
      </form>
      <div
        class="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div class="card-body">
          <Link
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6",
              marginBottom: "100px",
              width: "200px"
            }}
            to="/"
          >
            Create
          </Link>
        </div>
      </div>
    </div>
  );
};
