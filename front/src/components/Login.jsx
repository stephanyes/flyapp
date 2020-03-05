import React from "react";

export default ({ handleSubmit, handleChange, state }) => {
  return (
    <div>
      <div
        className="row align-items-center"
        style={{
          backgroundColor: "#ffffff"
        }}
      >
        <div className="col">
          <img
            src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="col">
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "40px",
              marginRight: "20px"
            }}
          >
            <div className="form-group">
              <h1
                className="font-weight-bold"
                style={{
                  paddingBottom: "20px"
                }}
              >
                Login
              </h1>
              <label for="exampleInputEmail1">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={e => handleChange(e)} // onChange para guardar el input en el estado de LoginContainer
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div
              className="form-group"
              style={{
                paddingBottom: "20px"
              }}
            >
              <label for="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={e => handleChange(e)} // mismo que con el email
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6"
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
