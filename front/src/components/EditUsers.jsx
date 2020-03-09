import React from "react";

export default ({ users, handleDelete, handlePromote, handleDemote }) => {
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
            Users
          </h1>
          <h5 className="font-weight-normal">
            These are the users of your site.
          </h5>
        </div>
      </div>
      <ul class="list-group">
        {users.length ? (
          users.map(user => {
            return (
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
                key={user.id}
              >
                {user.firstName}
                <div>
                  {user.rol_id === "admin" ? (
                    <button
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#2EC4B6",
                        color: "#2EC4B6",
                        marginRight: "20px"
                      }}
                      onClick={() => handleDemote(user.id)}
                    >
                      Remove Admin privileges
                    </button>
                  ) : user.rol_id === "client" ? (
                    <button
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6",
                        marginRight: "20px"
                      }}
                      onClick={() => handlePromote(user.id)}
                    >
                      Give Admin privileges
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#000000",
                        color: "#000000",
                        marginRight: "20px"
                      }}
                    >
                      Super Admin
                    </button>
                  )}
                  <button
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: "red",
                      borderColor: "red"
                    }}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <li>No se encontraron usuarios</li>
        )}
      </ul>
    </div>
  );
};
