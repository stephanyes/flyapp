import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";




export default ({ enviandoRating, sendComment, submit, estado }) => {

  // const ratingChanged = (newRating) => {
  //   enviandoRating(newRating)
  // }
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
            Review
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
          <label >Comment</label>
          <input
            onChange={sendComment}
            name="comment"
            type="text"
            className="form-control"
            id="inputComment"
            placeholder="This experience is so good because ..."
          />
        </div>
      </form>
      <div
        className="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <ReactStars value={estado} onChange={enviandoRating} count={5} size={40} color1={'#000'} color2={'#ffd700'} />
        </div>

        <div className="card-body">
          <Link
            onClick={(e) => submit(e)}
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
