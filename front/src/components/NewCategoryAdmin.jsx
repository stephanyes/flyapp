import React from "react";
import { Link } from "react-router-dom";

/*que si aprieto Edit, me mande aca pero con los valores completados con los del "edit"
para eso en cada uno de los formularios puedo poner un ternario que va a evaluar si existe el valor a completar
si existe, entonces, en el tag de form creo que es, value = {CATEGORY.NAME ? category.name : ""}
sino buscar una propiedad default value*/

/*va a tener que ser en otro component o en el mismo + ternario
porque el handleSubmit en un caso triggerea un axios.POST y en otro un axios.PUT*/
export default ({ handleChange, handleClick, nameValue, imgValue }) => {
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
            New Category
          </h1>
          <h5 className="font-weight-normal">
            Create a new category to your site.
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
          <label for="inputNameOfExperience">Name of category</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="inputNameOfCategorie"
            placeholder="Dinner"
            onChange={e => handleChange(e)}
            value={`${nameValue}`}
          />
        </div>
        <div className="form-group">
          <label for="inputImageUrl">Image URL</label>
          <input
            name="img"
            type="text"
            className="form-control"
            id="inputImageUrl"
            placeholder="https://www..."
            onChange={e => handleChange(e)}
            value={`${imgValue}`}
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
          <button
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6",
              marginBottom: "100px",
              width: "200px"
            }}
            onClick={handleClick}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
