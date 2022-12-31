import React from "react";
import { useEffect } from "react";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import studentService from "../service/student.service";

export const EditStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const [msg, setMsg] = useState("");

  const data = useParams();

  const navigate = useNavigate();
  //uygulama ayağa kalktığında hızlıca bağımlılıkları çağırmak için kullandığımız yöntem
  useEffect(() => {
    studentService
      .getStudentById(data.id)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const updateStudent = (e) => {
    e.preventDefault();
    studentService
      .updateStudent(student.id, student)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="div.col-md-6.offset-md-3">
            <div className="card">
              <div className="card-header text-center fs-3">Add Student</div>

              {msg && <p className="text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => updateStudent(e)}>
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
    </div>
  );
};
