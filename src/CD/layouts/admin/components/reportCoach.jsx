import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import {Link} from 'react-router-dom';

// import swal from 'sweetalert';

  
const ReportCoach = () => {
  
    const [coach_reg, setCoach_reg] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
  
    function getUsers() {
        axios.get('http://127.0.0.1:5000/listusers').then(function(response) {
            console.log(response.data);
            setCoach_reg(response.data);
        });
    }
     
    const deleteUser = (id) => {
        axios.delete(`http://127.0.0.1:5000/userdelete/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
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
    }
     
    return (
    <div>
        <br />
        <div className="container-fluid">
            <div className="row " style={{overflow:"scroll"}}>
                <div className="col-md-12">
                    {/* <p><Link to="/addnewuser" className="btn btn-success">Add New User</Link> </p> */}
                    {/* <center><h1>Coach List</h1></center> */}
                    <h1 class="text-right"><a href="/addNewCoach"> +</a></h1>
                    <table class="table table-bordered" >
                      <thead style={{background:"#422afb"}}>
                        <tr style={{color:"white"}}>
                            <th>SI No</th>
                            <th>Full_Name</th>
                            <th>Email</th>
                            <th>Experience</th>
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
                            {coach_reg.map((coach_reg, key) =>
                                <tr key={key}>
                                    <td>{coach_reg._id}</td>
                                    <td>{coach_reg.fullname}</td>
                                    <td>{coach_reg.email}</td> 
                                    <td>{coach_reg.experience}</td>
                                    <td>{coach_reg.state}</td>
                                    <td>{coach_reg.locality}</td> 
                                    <td>{coach_reg.gender}</td>
                                    <td>{coach_reg.username}</td>
                                    <td>{coach_reg.dateofbirth}</td> 
                                    <td>{coach_reg.phone}</td>
                                    <td>{coach_reg.district}</td>
                                    <td>
                                        <Link to={`user/${coach_reg._id}/edit`} className="btn btn-success"  style={{marginRight: "10px"}}>Edit</Link>
                                        
                                    </td>
                                    <td><button onClick={() => deleteUser(coach_reg._id)} className="btn btn-danger">Delete</button></td>
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

export default ReportCoach;
