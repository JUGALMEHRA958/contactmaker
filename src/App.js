// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
// import { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Modal, Button } from "bootstrap"; // Import Modal and Button components from Bootstrap
// import Navbar from './Components/Navbar';

function App() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleEditUpdateOnServer() {
    console.log(selectedUser);
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`, {
      method: "PUT",
      body: JSON.stringify(selectedUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("Update successful!"); // Display an alert
      })
      .catch((error) => console.error("Error updating user:", error));
  }
  

  function handleDelete(event, user) {
    console.log(event);
    console.log(user);
    setSelectedUser(user);
    setIsModalVisible(true);
    console.log(selectedUser);
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "DELETE",
      body: JSON.stringify(selectedUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("Delete successful!"); // Display an alert
      })
      .catch((error) => console.error("Error updating user:", error));
  }

  function handleEdit(event, user) {
    console.log(event);
    console.log(user);
    setSelectedUser(user);
    setIsModalVisible(true);
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        {data.map((user) => (
          <div key={user.id} className="card mt-3 col-md-4">
            <div className="card-body">
              <h5 className="card-title">Name: {user.name}</h5>
              <p className="card-text">Username: {user.username}</p>
              <button
                className="btn btn-info me-2"
                onClick={(e) => {
                  handleEdit(e, user);
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit contact
              </button>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  handleDelete(e, user);
                }}
              >
                Delete contact
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal Title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="nameInput" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    value={selectedUser?.name}
                    // readOnly
                    onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="usernameInput" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    value={selectedUser?.username}
                    // readOnly
                    onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}

                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="emailInput" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    value={selectedUser?.email}
                    // readOnly
                    onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}

                  />
                </div>
                <div className="col">
                  <label htmlFor="phoneInput" className="form-label">
                    Phone:
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="phoneInput"
                    value={selectedUser?.phone}
                    // readOnly
                    onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}

                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  handleEditUpdateOnServer();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
