import React, { useState  } from "react";
import "../css/style.css";

// import axios from "axios";
// import { NavLink } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
const Package = () => {
//   const navigate = useNavigate();
  
//     const [inputs, setInputs] = useState([]);
  
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     }
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       axios.post('http://127.0.0.1:5000/workout', inputs).then(function(response){
//         console.log(response.data);
//         navigate('/coach/CoachUploadVideo');
       
//       });
//     }
  return (
   <>
   <br />
   <br /><br />
            <div className="containerAdmin">
              <div className="title"></div>
              <h1 class="text-right"><a href="/"> +</a></h1>
              <div className="content">
                <form >
           
                <div className="user-details">
                    <div className="input-box">
                      <span className="details">Title</span>
                      <input type="text" placeholder="Enter Title "name="title" id="title"  required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Description</span>
                      <input type="text" placeholder="Enter Description"name="description" id="description"  required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Duration</span>
                      <input type="text" placeholder="Enter Duration"name="duration" id="duration"  required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Image</span>
                      <input type="file" placeholder="Enter your name" name="fullname" id="fullname"  required/>
                    </div>
                   
                  </div>
                 
                  <center>
                  <button className="btn btn-dark text-teal"  type="submit" value="Submit">Summit</button>
                  </center>
                </form>
              </div>
            </div>
   </>
  )
}

export default Package;