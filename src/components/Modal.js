import React from "react";
import axios from "axios"


export default function Modal(props) {

    const saveRecord = (e)=>{
                axios.post("http://localhost:3000/users",{name : document.getElementById('inputname4').value, email :  document.getElementById('inputEmail4').value, address:  document.getElementById('inputAddress').value, contact :document.getElementById('contact').value})
                .then(res=>{console.log(res)})
    }
    

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add New User
      </button>

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
              <form className="row g-3" onSubmit={(e)=>saveRecord(e)}>
                <div className="col-md-12">
                  <label htmlFor="inputname4" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputname4"
                    value={props.Data.name}
                    onChange = {(e)=> e.target.value}
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
                    value={props.Data.email}
                    onChange = {(e)=>e.target.value}
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
                    value={props.Data.address}
                    onChange = {(e)=>e.target.value}
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
                    value={props.Data.contact}
                    onChange = {(e)=>e.target.value}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                Save Record
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
    </div>
  );
}
