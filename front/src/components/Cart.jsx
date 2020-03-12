import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Products from "./Products";

export default ({ carrito, cart, checkOut, handleClick, loged }) => {
  let data = Object.assign({}, localStorage);
  let prod = Object.values(data);
  let producto = prod.map(e => JSON.parse(e));

  const [price, setPrice] = useState([]);

  useEffect(() => {
    if (carrito.length >= 1) {
      let priceSum = 
      carrito.map(product => product.price)
        .reduce((a, b) => a + b);
      console.log(price);
      setPrice(priceSum);
    }
  }, [carrito]);

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
            <div
              className="card mb-3"
              key={algo.id}
              style={{
                borderStyle: "none",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
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
            <div
              className="card mb-3"
              key={algo.id}
              style={{
                borderStyle: "none",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
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
            {/* total */}
            {carrito.length ? (
              <div
                style={{
                  margin: "20px",
                  marginTop: "0px"
                }}
              >
                <div
                  className="card mb-3"
                  style={{
                    borderStyle: "none"
                    // boxShadow:
                    //  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                      <h5
                        className="font-weight-bold"
                        style={{
                          padding: "20px"
                          //paddingLeft: "80px"
                        }}
                      >
                        Total: u$S {price}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <button
              onClick={checkOut}
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginBottom: "100px",
                marginTop: "30px"
              }}
            >
              Go to Checkout
            </button>
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
