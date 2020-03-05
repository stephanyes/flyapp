import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div
    style={{
      backgroundColor: "white"
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
          This is your actual profile
        </h5>
        <Link
          className="btn btn-primary btn-lg"
          style={{
            backgroundColor: "#2EC4B6",
            borderColor: "#2EC4B6"
          }}
          to="/"
        >
          Logout
        </Link>
      </div>
    </div>

    <div
      className="container"
      style={{
        padding: "20px"
      }}
    >
      <h3 className="font-weight-bold">Previous purchases</h3>
    </div>
    <div className="card">
      <div className="card-body">This is a previous purchase.</div>
    </div>
    <div className="card">
      <div className="card-body">This is a previous purchase.</div>
    </div>
    <div className="card">
      <div className="card-body">This is a previous purchase.</div>
    </div>
    <div className="card">
      <div className="card-body">This is a previous purchase.</div>
    </div>
    <div className="card">
      <div className="card-body">This is a previous purchase.</div>
    </div>
    <div className="card">
      <div className="card-body">This is a previous purchase.</div>
    </div>
    <div className="card">
      <div className="card-body">This is a previous purchase.</div>
    </div>
  </div>
);
