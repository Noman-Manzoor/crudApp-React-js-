import React, { useState } from "react";
import axios from "axios";

export default function Table(props) {
  const [state, setstate] = useState([]);
  const [ediTUser, setediTUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
      console.log(res);
    });
    alert(`You are  deleting user having id ${id}!`);
    axios.get("http://localhost:3000/users").then((res) => {
      setstate(res.data);
    });
  };
  
  const editUser = (id) => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setediTUser(res.data));
  };

  const updateRecord = (id) => {
    axios
      .post(`http://localhost:3000/users/${id}`, {
        name: document.getElementById("inputname4").value,
        email: document.getElementById("inputEmail4").value,
        address: document.getElementById("inputAddress").value,
        contact: document.getElementById("contact").value,
      });
  };

  const handleInputChange = (event) => {
    setstate((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  // console.log("state length is ",state.length)
  // console.log(state);
  // console.log("data length is ",props.Data.length)
  // console.log(props.Data);

  return (
    <div>
      {/* starts modal which will open on edit button click */}
      <div
        className="modal fade"
        id="modal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter the details Below
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="row g-3"
                onSubmit={() => updateRecord(ediTUser.id)}
              >
                <div className="col-md-12">
                  <label htmlFor="inputname4" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputname4"
                    value={ediTUser.name}
                    onChange={(event) => event.target.value}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    value={ediTUser.email}
                    onChange={(event) => event.target.value}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Pakistan"
                    value={ediTUser.address}
                    onChange={(event) => event.target.value}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="contact" className="form-label">
                    Contact
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="contact"
                    placeholder=""
                    value={ediTUser.contact}
                    onChange={(event) => event.target.value}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.length
            ? state.map((e) => {
                return (
                  <tr key={e.id}>
                    <th scope="row">{e.name}</th>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.contact}</td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary mx-1"
                        onClick={() => deleteUser(e.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="modal2"
                        onClick={() => editUser(e.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            : props.Data.length &&
              props.Data.map((e) => {
                return (
                  <tr key={e.id}>
                    <th scope="row">{e.name}</th>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.contact}</td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary mx-1"
                        onClick={() => deleteUser(e.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#modal2"
                        onClick={() => editUser(e.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
