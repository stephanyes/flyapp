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
                        marginRight: "20px",
                        width: "200px"
                      }}
                      onClick={() => handleDemote(user.id)}
                    >
                      Revoke Admin
                    </button>
                  ) : user.rol_id === "client" ? (
                    <button
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#2EC4B6",
                        borderColor: "#2EC4B6",
                        marginRight: "20px",
                        width: "200px"
                      }}
                      onClick={() => handlePromote(user.id)}
                    >
                      Do Admin
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#000000",
                        color: "#000000",
                        width: "320px" //es el ancho de cada uno + los 20px del margin-right
                      }}
                    >
                      Super Admin
                    </button>
                  )}
                  {user.rol_id === "superAdmin" ? null : (
                    <button
                      className="btn btn-primary btn-lg"
                      style={{
                        backgroundColor: "#EA526F",
                        borderColor: "#EA526F"
                      }}
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  )}
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
