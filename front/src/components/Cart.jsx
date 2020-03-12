import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

export default ({ carrito, cart, checkOut, handleClick, loged }) => {
  console.log(carrito, "cart");
  let data = Object.assign({}, localStorage);
  let prod = Object.values(data);
  let producto = prod.map(e => JSON.parse(e));
  useEffect(() => {}, [carrito]);

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
            Cart
          </h1>
          <h5 className="font-weight-normal">
            These are your selected experiences.
          </h5>
        </div>
      </div>

      {loged ? (
        <div
          style={{
            margin: "40px"
          }}
        >
          {carrito.map(algo => (
            <div className="card mb-3" key={algo.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={algo.img_1} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="font-weight-bold">{algo.name}</h5>
                    <p className="font-weight-normal">{algo.description}</p>
                    <p className="font-weight-bold">u$S {algo.price} </p>
                    <Link
                      onClick={() => handleClick(`${algo.id}`)}
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6"
                      }}
                      to="/cart"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
                <div className="col-md-2">
                  <h5
                    className="font-weight-bold"
                    style={{
                      paddingTop: "20px",
                      paddingLeft: "80px"
                    }}
                  >
                    u$S {algo.price}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            margin: "40px"
          }}
          // NO LOGUEADO!!!!!!!
        >
          {producto.map(algo => (
            <div className="card mb-3" key={algo.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={algo.img_1} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="font-weight-bold">{algo.name}</h5>
                    <p className="font-weight-normal">{algo.description}</p>

                    <button
                      onClick={() => handleClick(`${algo.id}`)}
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6"
                      }}
                      to="/cart"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="col-md-2">
                  <h5
                    className="font-weight-bold"
                    style={{
                      paddingTop: "20px",
                      paddingLeft: "80px"
                    }}
                  >
                    u$S {algo.price}{" "}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length >= 1 || producto.length >= 1 || carrito.length >= 1 ? (
        <div
          class="card text-center"
          style={{
            borderColor: "#ffffff"
          }}
        >
          <div class="card-body">
            <Link
              onClick={checkOut}
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginBottom: "100px"
              }}
              to="/checkout"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderColor: "#ffffff",
              padding: "40px"
            }}
          >
            <h4 className="font-weight-bold">No experiences in your cart!</h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderColor: "#ffffff"
            }}
          >
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginBottom: "250px"
              }}
              to="/experiences"
            >
              Discover Experiences
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
