import React from "react";
import { useState } from "react";
import studentService from "../service/student.service";
//ekleyeceğim özellikler

export const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const submitStudent = (e) => {
    e.preventDefault();

    studentService
      .saveStudent(student)
      .then((res) => {
        setMsg("Student Added Successfully");
        setStudent({
          firstName: "",
          lastName: "",
          email: "",
          age: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //burası benim css kısmım
  return (
    <div className="container">
      <div className="row">
        <div className="div.col-md-6.offset-md-3">
          <div className="card">
            <div className="card-header text-center fs-3">Add Student</div>

            {msg && <p className="text-success">{msg}</p>}

            <div className="card-body">
              <form onSubmit={(e) => submitStudent(e)}>
                <div className="mb-3">
                  <label>Enter First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={student.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={student.lastName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={student.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter Age</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    //burada değerleri atıyoruz tablonun içine
                    value={student.age}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-success">Submit</button>
                  <input
                    type="Reset"
                    className="btn btn-danger ms-2"
                    value="Reset"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
