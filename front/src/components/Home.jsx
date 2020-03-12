import React from "react";
import { Link } from "react-router-dom";
// let random1 = Math.floor(Math.random() * 10) //va del 0 - 9
export default ({ products }) => {
  // console.log(products);
  return (
    <div
      style={{
        backgroundColor: "white"
      }}
    >
      <div
        className="row align-items-center"
        style={{
          paddingBottom: "20px"
        }}
      >
        <div className="col">
          <div
            className="jumbotron"
            style={{
              backgroundColor: "white",
              paddingLeft: "60px"
            }}
          >
            <h1
              className="font-weight-bold"
              style={{
                paddingBottom: "20px"
              }}
            >
              Best experiences for your enjoy!
            </h1>
            <p
              className="font-weight-normal"
              style={{
                paddingBottom: "20px"
              }}
            >
              We selected all these experiences for you. We want that you <br />
              enjoy everyone of these moments in your life.
            </p>
            <Link
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6"
              }}
              to="/experiences"
            >
              Discover Experiences
            </Link>
          </div>
        </div>
        <div className="col">
          <img
            src="https://insideone.s3-sa-east-1.amazonaws.com/image-home-04.png"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>

      <div
        className="container"
        style={{
          padding: "20px"
        }}
      >
        <h1 className="font-weight-bold">Experiences that matters</h1>
      </div>
      <div
        className="card-deck"
        style={{
          padding: "40px"
        }}
      >
        {/* ------------------------------------- */}
        {products
          ? products.slice(0, 4).map(singles => (
              <div
                className="card"
                key={singles.id}
                style={{
                  borderColor: "#ffffff",
                  borderStyle: "none",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                  to={`/experience/${singles.id}`}
                >
                  <img src={singles.img_1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="font-weight-bold">{singles.name}</h5>
                    <p className="font-weight-normal">{singles.description}</p>
                    <p className="font-weight-bold">u$S {singles.price}</p>
                  </div>
                </Link>
              </div>
            ))
          : null}
        {/* ------------------------------------- */}
      </div>
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
              paddingTop: "40px"
            }}
          >
            Specials experiences for you
          </h1>
          <h5
            className="font-weight-normal"
            style={{
              padding: "10px"
            }}
          >
            We give you a lot of special experiences for your enjoy.
          </h5>
          <Link
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6",
              margin: "50px"
            }}
            to="/experiences"
          >
            View Experiences
          </Link>
        </div>
      </div>
      <div
        className="card-deck"
        style={{
          backgroundColor: "#ffffff",
          padding: "40px"
        }}
      >
        {products
          ? products.slice(4, 7).map(singles => (
              <div
                className="card"
                key={singles.id}
                style={{
                  borderColor: "#ffffff",
                  borderStyle: "none",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                  to={`/experience/${singles.id}`}
                >
                  <img src={singles.img_1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="font-weight-bold">{singles.name}</h5>
                    <p className="font-weight-normal">{singles.description}</p>
                    <p className="font-weight-bold">u$S {singles.price}</p>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>
      <div
        className="row align-items-center"
        style={{
          backgroundColor: "#ffffff",
          paddingBottom: "40px"
        }}
      >
        <div className="col">
          <img
            src="https://insideone.s3-sa-east-1.amazonaws.com/image-home-01.png"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="col">
          <div
            className="jumbotron"
            style={{ paddingLeft: "70px", backgroundColor: "#ffffff" }}
          >
            <h1
              className="font-weight-bold"
              style={{
                paddingLeft: "40px",
                paddingBottom: "20px"
              }}
            >
              Contact us!
            </h1>
            <h5
              className="font-weight-light"
              style={{
                paddingLeft: "40px",
                paddingBottom: "5px"
              }}
            >
              <a
                href="mailto:hi@flyapp.com"
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                hi@flyapp.com
              </a>
            </h5>
            <h5
              className="font-weight-light"
              style={{
                paddingLeft: "40px",
                paddingBottom: "5px"
              }}
            >
              <a
                href="tel:+13054224783"
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                +1 305 4224 783
              </a>
            </h5>

            <h5
              className="font-weight-light"
              style={{
                paddingLeft: "40px",
                paddingBottom: "5px"
              }}
            >
              <a
                href="https://goo.gl/maps/45sCh4noE98TvaKm7"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                Av. Lincoln 2362, Washington, DC, EE.UU.
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
