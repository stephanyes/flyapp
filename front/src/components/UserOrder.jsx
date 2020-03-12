import React from "react";
import { Link } from "react-router-dom";

export default ({ state, handleClick, handleClickPayment }) => {

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
            Order #{state.orders.selected.id}
          </h1>
          <h5 className="font-weight-normal">Your orders status is {state.orders.selected.status}.</h5>
        </div>
      </div>
      <h2
        className="font-weight-bold"
        style={{
          padding: "20px"
        }}
      >
        Details
      </h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Client:
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              {state.userLogin.loginUser.firstName + " " + state.userLogin.loginUser.secondName}
            </span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Mail:
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              {state.userLogin.loginUser.email}
            </span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Direction:
            </span>
            <span
              style={{
                margin: "20px"
              }}
            >
              {state.userLogin.loginUser.address1 + " " + state.userLogin.loginUser.address2 + ", " + state.userLogin.loginUser.address3 + ". "}
            </span>
          </div>
        </li>
        <h2
          className="font-weight-bold"
          style={{
            padding: "20px"
          }}
        >
          Experiences
        </h2>
        <div
          className="card mb-3"
          style={{
            marginLeft: "40px"
          }}
        >
          {state.orders.selected.cart.products.map(algo => (
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

                    {state.orders.selected.status == "fulfilled" ? (
                      algo.product_cart.leftComment === false ? (
                        <Link
                          className="btn btn-primary btn-lg"
                          style={{
                            backgroundColor: "#2EC4B6",
                            borderColor: "#2EC4B6"
                          }}
                          to={`/review/${algo.id}`}
                        >
                          Review
                        </Link>
                      ) :
                        (<p>Thanks for your review <img style={{ maxHeight: "25px" }} src="https://insideone.s3-sa-east-1.amazonaws.com/check.png" alt="check_mark" /></p>)

                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2
          className="font-weight-bold"
          style={{
            padding: "20px"
          }}
        >
          Status
        </h2>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Purchased {}
            </span>
          </div>

          <div>
            {state.orders.selected.status == "draft" ? (
              <button
                onClick={() => handleClickPayment(state.orders.selected)}
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: "#2EC4B6",

                  borderColor: "#2EC4B6",
                  marginRight: "20px",
                  width: "150px"
                }}

              >
                Pagar
              </button>
            ) : (null)}

            {state.orders.selected.status == "draft" ? (
              <button
                onClick={() => handleClick(`${state.orders.selected.id}`)}
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: "#EA526F",
                  borderColor: "#EA526F"
                }}
                to="/users"
              >
                Cancel
              </button>
            ) : (null)}

          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Sent XX:XX hs
            </span>
          </div>
          <div>
            <Link

              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",

                borderColor: "#2EC4B6",

                width: "265px"
              }}
              to="/users"
            >
              Complete
            </Link>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span
              style={{
                margin: "20px"
              }}
            >
              Cancelled XX:XX hs
            </span>
          </div>
          <div>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#ffffff",
                color: "#2EC4B6",
                borderColor: "#2EC4B6",
                width: "265px"
              }}
              to="/users"
            >
              Contact Client
            </Link>
          </div>
        </li>
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          style={{
            paddingTop: "22px",
            paddingBottom: "22px",
            marginBottom: "40px"
          }}
        >
          <div>
            <span
              style={{
                margin: "20px",
                marginBottom: "20px"
              }}
            >
              Completed XX:XX hs
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
