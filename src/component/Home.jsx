import React, { useState } from "react";
import { useEffect } from "react";
import studentService from "../service/student.service";
import { Link } from "react-router-dom";

//burası ana ekranım. Öğrencileri burada getiriyorum
export const Home = () => {
  const [studentList, setStudent] = useState([]);
  const [msg, setMsg]=useState("");
  useEffect((
    
  ) => {
    init();
    
  }, []);

  const init=()=>{
    studentService
    .getAllStudent()
    .then((res) => {
      console.log(res.data);
      setStudent(res.data);  
    })
    .catch((error) => {
      console.log(error);
    });

  };


  const deleteStudent=(id)=>{

studentService.
deleteStudent(id).then((res)=>{
  setMsg("Delete Successfully");
  init();

})
.catch((error)=>{
  console.log(error);
}
)

  };

  
  

  return (
    <div className="container">
      <h1 className="text-center mt-3">Student System</h1>

      {
        msg && <p className="text-center text-success">{msg}</p>
      }

      <table class="table">
        <thead className="bg-light">
          <tr>
            <th scope="col">SL No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((e, num) => (
            <tr>
              <th scope="row">{num + 1}</th>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.age}</td>
              <td>
                <Link
                  to={'editStudent/'+ e.id}
                  className="btn btn-sm btn-primary">
                  Edit
                </Link>
                
                <a onClick={()=>deleteStudent(e.id)} className="btn btn-sm btn-danger ms-2">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
