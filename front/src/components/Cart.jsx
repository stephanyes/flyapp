import React from "react";
import { Link, Redirect } from "react-router-dom";

export default ({ carrito, checkOut, handleClick, loged }) => {
  console.log(carrito, "cart");
  let data = Object.assign({}, localStorage);
  let prod = Object.values(data);
  let producto = prod.map(e => JSON.parse(e));

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
      {/* LADO LOGUEADO!!!!!! */}
      {loged ? (
        <div
          style={{
            margin: "40px"
          }}
        >
          {carrito.map(algo => (
            <div className="card mb-3" key={algo.id}>
              <div className="row no-gutters">
                <div className="col-md-2">
                  <img src={algo.img_1} className="card-img" alt="..." />
                </div>
                <div className="col-md-10">
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
              </div>id
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
          <h1>No logueado</h1>
          {producto.map(algo => (
            <div className="card mb-3" key={algo.id}>
              <div className="row no-gutters">
                <div className="col-md-2">
                  <img src={algo.img_1} className="card-img" alt="..." />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="font-weight-bold">{algo.name}</h5>
                    <p className="font-weight-normal">{algo.description}</p>
                    <p className="font-weight-bold">u$S {algo.price} </p>
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
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        class="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div class="card-body">
          <button
            onClick={checkOut}
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6",
              marginBottom: "100px"
            }}
            
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
