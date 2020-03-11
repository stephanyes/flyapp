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
            New Product
          </h1>
          <h5 className="font-weight-normal">
            Create a new experience to your site.
          </h5>
        </div>
      </div>
      <form
        style={{
          padding: "40px",
          paddingBottom: "0px"
          //  margin: "20px"
        }}
      >
        <div className="form-group">
          <label for="inputNameOfExperience">Name of experience</label>
          <input
            //  onChange={handleAddress1}
            name="nameOfExperience"
            type="text"
            className="form-control"
            id="inputNameOfExperience"
            placeholder="Parachute in Dubai"
          />
        </div>
        <div class="form-group">
          <label for="inputSelect">Category</label>
          <select class="form-control" id="inputSelect">
            //aca hay que mapear las categorias existentes para asignar. Esto es
            solo ejemplo.
            <option>Trips</option>
            <option>Gourmet</option>
            <option>Extreme</option>
          </select>
        </div>
        <div className="form-group">
          <label for="inputDescription">Description</label>
          <input
            //   onChange={handleAddress2}
            name="description"
            type="number"
            className="form-control"
            id="inputDescription"
            placeholder="An extreme adventure of parachute..."
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
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputPrice">Price</label>
            <input
              //   onChange={handleAddress3}
              name="price"
              type="number"
              className="form-control"
              id="inputPrice"
            />
          </div>

          <div
            className="form-group col-md-6"
            style={{
              paddingBottom: "20px"
            }}
          >
            <label for="inputStock">Stock</label>
            <input
              //   onChange={handlePostCode}
              name="stock"
              type="number"
              className="form-control"
              id="inputStock"
            />
          </div>
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
