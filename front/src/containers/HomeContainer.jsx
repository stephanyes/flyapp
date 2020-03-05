import React from "react";
import { Link } from "react-router-dom";
export default () => (
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
          class="img-fluid"
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
      <div className="card">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="font-weight-bold">Card title</h5>
          <p className="font-weight-normal">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="font-weight-bold">Card title</h5>
          <p className="font-weight-normal">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="font-weight-bold">Card title</h5>
          <p className="font-weight-normal">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="font-weight-bold">Card title</h5>
          <p className="font-weight-normal">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
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
          We give you a lot of special experiences for your enjoy
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
      <div className="card">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="font-weight-bold">Card title</h5>
          <p className="font-weight-normal">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="font-weight-bold">Card title</h5>
          <p className="font-weight-normal">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://d9np3dj86nsu2.cloudfront.net/image/9dd9160b543675549b9ad6bfddd6bab0"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="font-weight-bold">Card title</h5>
          <p className="font-weight-normal">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
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
          class="img-fluid"
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
              paddingBottom: "10px"
            }}
          >
            hi@flyapp.com
          </h5>
          <h5
            className="font-weight-light"
            style={{
              paddingLeft: "40px",
              paddingBottom: "5px"
            }}
          >
            +1 305 4224 783
          </h5>
          <h5
            className="font-weight-light"
            style={{
              paddingLeft: "40px",
              paddingBottom: "5px"
            }}
          >
            Av. Lincoln 2362, Washington, DC, EE.UU.
          </h5>
        </div>
      </div>
    </div>
  </div>
);
