import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link} from 'react-router-dom';
import Plus_img from "../../../images/Plus_img.png";

// import swal from 'sweetalert';

  
const StudentReport = () => {
  
    const [student_reg, setStudent_reg] = useState([]);
    useEffect(() => {
        getStudent();
    }, []);
  
    function getStudent() {
        axios.get('http://127.0.0.1:5000/studentlist').then(function(response) {
            console.log(response.data);
            setStudent_reg(response.data);
        });
    }
     
    const deleteStudent = (id) => {
        axios.delete(`http://127.0.0.1:5000/studentdelete/${id}`).then(function(response){
            console.log(response.data);
            getStudent();
        });
        // alert("Are you sure !");
        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this imaginary file!",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        //   })
        //   .then((willDelete) => {
        //     if (willDelete) {
        //       swal("Poof! Your imaginary file has been deleted!", {
        //         icon: "success",
        //       });
        //     } else {
        //       swal("Your imaginary file is safe!");
        //     }
        //   });
        // 
        function User({ name }) {
            return <div>{name}</div>;
          }
    }
     
    return (
    <div>
        <div className="container-fluid">
            <div className="row " style={{overflow:"scroll"}}>
                <div className="col-md-12">
                    {/* <p><Link to="/addnewuser" className="btn btn-success">Add New User</Link> </p> */}
                    {/* <center><h2>Student List</h2></center> */}
                    <h1 class="text-right"><a href="CoachAthele" id="sreg" target="_blank"> +</a></h1>
                    <table class="table table-bordered" >
                      <thead style={{background:"#422afb"}}>
                        <tr style={{color:"white"}}>
                            <th>SI No</th>
                            <th>Coach Id</th>
                            <th>Coach Name</th>
                            <th>Student Id</th>
                            <th>Full_Name</th>
                            <th>Email</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>State</th>
                            <th>Locality</th>
                            <th>Gender</th>
                            <th>Username</th>
                            <th>D.O.B</th>
                            <th>Phone No</th>
                            <th>District</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                      </thead>
                      
                      <tbody>
                            {student_reg.map((student_reg, key) =>
                                <tr key={key}>
                                    <td>{student_reg._id}</td>
                                    <td> {student_reg.coach_id}</td>
                                    <td>{student_reg.coach_name}</td>
                                    <td>
                                    <Link to={`../CoachUploadVideo?rstid=${student_reg.student_id}`} >{student_reg.student_id}</Link>
                                        {/* <a href="./CoachUploadVideo/rstid=${student_reg.student_id}">
                                 {student_reg.student_id} </a></td> */} </td>
                                    <td>{student_reg.fullname}</td>
                                    <td>{student_reg.email}</td> 
                                    <td>{student_reg.height}</td>
                                    <td>{student_reg.weight}</td>
                                    <td>{student_reg.state}</td>
                                    <td>{student_reg.locality}</td>
                                    <td>{student_reg.gender}</td>
                                    <td>{student_reg.username}</td>
                                    <td>{student_reg.dateofbirth}</td> 
                                    <td>{student_reg.phone}</td>
                                    <td>{student_reg.district}</td>
                                    <td>
                                        <Link to={`user/${student_reg._id}/edit`} className="btn btn-success"  style={{marginRight: "10px"}}>Edit</Link>
                                        
                                    </td>
                                    <td><button onClick={() => deleteStudent(student_reg._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
  );
}

export default StudentReport;

