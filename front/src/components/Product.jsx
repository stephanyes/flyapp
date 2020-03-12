import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

export default ({ producto, storing, comments }) => {
  console.log(producto);
  let value = 0;
  let count = 0;
  comments.map(algo => algo.productId == producto.id ? (
    value += algo.rating,
    count += 1
  ) : null)
  let promedio = (value / count)

  return (
    <div
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div
        className="row aling-items-center"
        style={{
          backgroundColor: "#ffffff"
        }}
      >
        <div
          className="col"
          style={{
            padding: "40px",
            backgroundColor: "#ffffff"
            //paddingBottom: "200px"
          }}
        >
          <div
            className="jumbotron"
            style={{
              backgroundColor: "#ffffff"
            }}
          >
            < ReactStars
              edit={false}
              value={promedio}
              count={5}
              size={30}
              color1={"#000"}
              color2={"#ffd700"} />



            <h1
              className="font-weight-bold"
              style={{
                paddingBottom: "10px"
              }}
            >
              {producto.name}
            </h1>

            <p
              className="font-weight-normal"
              style={{
                paddingBottom: "20px"
              }}
            >
              {producto.description}{" "}
            </p>
            <h5
              className="font-weight-normal"
              style={{
                paddingBottom: "20px",
                marginBottom: "20px"
              }}
            >{`U$D ${producto.price}`}</h5>

            <Link
              onClick={e => storing(e, producto)}
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginRight: "20px"
              }}
              to="/experiences"
            >
              Add to Cart
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#EA526F",
                borderColor: "#EA526F"
              }}
              to="/checkout"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>

        <div className="col">
          <img
            style={{
              marginTop: "25px",
              paddingBottom: "100px",
              backgroundColor: "#ffffff"
            }}
            src={producto.img_2}
            // src="https://insideone.s3-sa-east-1.amazonaws.com/image-home-02+copy+3.png"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
      <div>
        <h2
          className="font-weight-bold"
          style={{ paddingBottom: "10px", margin: "20px", marginLeft: "60px" }}
        >
          Comments
        </h2>

        {comments.map(singleComent =>
          singleComent.productId == producto.id ? (
            <div className="card mb-3" key={singleComent.id}>
              <div className="row no-gutters">
                <div className="col-md-10">
                  <div className="card-body">
                    <p
                      className="font-weight-bold"
                      style={{ marginLeft: "35px" }}
                    >
                      John Doe
                    </p>
                    <p
                      className="font-weight-normal"
                      style={{ marginLeft: "35px" }}
                    >
                      {singleComent.comment}
                    </p>
                    <p
                      className="font-weight-normal"
                      style={{ marginLeft: "35px" }}
                    >
                      <div className="" style={{ display: "flex" }}>
                        <ReactStars
                          edit={false}
                          value={singleComent.rating}
                          count={5}
                          size={30}
                          color1={"#000"}
                          color2={"#ffd700"}
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
