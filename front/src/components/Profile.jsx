import React from "react";
import { Link } from "react-router-dom";

export default ({ handleClick, profile, props }) => {
  console.log(props, "profileeeeeeeeeeeeeeeeeeee")

  return (


    <div
      style={{
        backgroundColor: "#fff"
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
            Profile
        </h1>
          <h5
            className="font-weight-normal"
            style={{
              marginBottom: "20px"
            }}
          >
            This is your actual profile.
        </h5>
        </div>
        {profile ?
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <span
                  style={{
                    margin: "20px"
                  }}
                >
                  Name:
          </span>
                <span
                  style={{
                    margin: "20px"
                  }}
                >
                  {profile.firstName} {profile.lastName}
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
                  Email:
          </span>
                <span
                  style={{
                    margin: "20px"
                  }}
                >
                  {profile.email}
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
                  Address:
          </span>
                <span
                  style={{
                    margin: "0px"
                  }}
                >
                  {profile.address1} {profile.address2}, {profile.address3}
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
                  Zip:
          </span>
                <span
                  style={{
                    margin: "20px"
                  }}
                >
                  {profile.postCode}
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
                  Phone:
          </span>
                <span
                  style={{
                    margin: "20px"
                  }}
                >
                  {profile.phone}
                </span>
              </div>
            </li>
          </ul>
          : null}

      </div>
      <div
        className="container"
        style={{
          padding: "20px"
        }}
      >
        <h3 className="font-weight-bold">Your Orders...</h3>

      </div>

      {props.state.orders.draft.length ? (

        <div className="">
          {props.state.orders.draft.map(order =>
            <div className="" key={order.id}>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Order # {order.id}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Quantity of Experiencies {order.cart.products.length}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Awaiting payment
          </span>
                  </div>
                  <div>
                    <Link
                      onClick={() => handleClick(order)}
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6"
                      }}
                      to={`/order/${order.id}`}
                    >
                      View Order
          </Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
          null
        )}


      {props.state.orders.confirmed.length ? (

        <div className="">
          {props.state.orders.confirmed.map(order =>
            <div className="" key={order.id}>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Order # {order.id}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Quantity of Experiencies {order.cart.products.length}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Payment successful
</span>
                  </div>
                  <div>
                    <Link
                      onClick={() => handleClick(order)}
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6"
                      }}
                      to={`/order/${order.id}`}
                    >
                      View Order
</Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
          null
        )}



      {props.state.orders.cancelled.length ? (

        <div className="">
          {props.state.orders.cancelled.map(order =>
            <div className="" key={order.id}>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Order # {order.id}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Quantity of Experiencies {order.cart.products.length}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Your order has been cancelled
</span>
                  </div>
                  <div>
                    <Link
                      onClick={() => handleClick(order)}
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6"
                      }}
                      to={`/order/${order.id}`}
                    >
                      View Order
</Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
          null
        )}

      {props.state.orders.fulfilled.length ? (

        <div className="">
          {props.state.orders.fulfilled.map(order =>
            <div className="" key={order.id}>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Order # {order.id}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Quantity of Experiencies {order.cart.products.length}
                    </span>
                    <span
                      style={{
                        margin: "20px"
                      }}
                    >
                      Delivered
</span>
                  </div>
                  <div>
                    <Link
                      onClick={() => handleClick(order)}
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6"
                      }}
                      to={`/order/${order.id}`}
                    >
                      View Order
</Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
          null
        )}

    </div>

  )
}
