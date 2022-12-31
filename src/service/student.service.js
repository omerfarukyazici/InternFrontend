import axios from "axios";

//burası servis kısmım backendim ile bağladım


const BASE_API_URL="http://localhost:8080/api/v1";

class StudentService{

saveStudent(student)
{
return axios.post(BASE_API_URL+"/save",student);
}

getAllStudent()
{
    return axios.get(BASE_API_URL+"/");
}

getStudentById(id)
{
    return axios.get(BASE_API_URL+"/"+id);
}
deleteStudent(id)
{
    return axios.get(BASE_API_URL + "/delete/" + id);

}
updateStudent(id,student)
{
    return axios.post(BASE_API_URL+"/update/"+id,student);
}

}

export default new StudentService();