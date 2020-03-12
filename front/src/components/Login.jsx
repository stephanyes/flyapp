import React from "react";

export default ({ handleSubmit, handleChange1, handleChange2, state }) => {
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
            style={{
              maxHeight: "660px"
            }}
            src="https://insideone.s3-sa-east-1.amazonaws.com/login-image-x2.png"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="col">
          <form
            onSubmit={e => handleSubmit(e)}
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
              <label>Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange1}
                style={
                  state.error && !state.email
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
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
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange2}
                style={
                  state.error && !state.password
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
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
            {state.error ? (
              <div>
                <br />
                <p>Invalid email and/or password</p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};
