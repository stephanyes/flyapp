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
            New Review
          </h1>
          <h5 className="font-weight-normal">Leave your opinion.</h5>
        </div>
      </div>
      <form
        style={{
          padding: "40px",
          paddingBottom: "0px"
        }}
      >
        <div className="form-group">
          <label for="inputRate">Rate</label>
          <h5
            //  onChange={handleAddress1}
            name="rate"
            type="text"
            className="form-control"
            id="inputRate"
            placeholder="Dinner"
          >
            *****
          </h5>
        </div>
        <div className="form-group">
          <label for="inputComment">Comment</label>
          <input
            //   onChange={handleAddress2}
            name="comment"
            type="text"
            className="form-control"
            id="inputComment"
            placeholder="This experience is so good because ..."
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
            Done
          </Link>
        </div>
      </div>
    </div>
  );
};
