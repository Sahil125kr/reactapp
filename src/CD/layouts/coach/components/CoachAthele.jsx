import React, { useState  } from "react";
// import "../css/form.css";
import "../css/style.css";
import { NavLink } from 'react-router-dom'

import axios from "axios";
import { useNavigate } from "react-router-dom";


const CoachAtheie = () => {
  const navigate = useNavigate();
  
    const [inputs, setInputs] = useState([]);
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://127.0.0.1:5000/studentadd', inputs).then(function(response){
        console.log(response.data);
        navigate('/coach');
       
      });
    }
  return (
   <>  

           <br /><br />
           <p>test data</p>
            <div className="containerAdmin">
              <div className="title"></div>
              <div className="content">
                <form onSubmit={handleSubmit}>
                <div className="user-details">
                    <div className="input-box">
                      <span className="details">Coach id</span>
                      <input type="text" placeholder="Enter your coach_id "name="coach_id" id="coach_id" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Coach Name</span>
                      <input type="text" placeholder="Enter your coach_name"name="coach_name" id="coach_name" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Student id</span>
                      <input type="text" placeholder="Enter your student id"name="student_id" id="student_id" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Full Name</span>
                      <input type="text" placeholder="Enter your name" name="fullname" id="fullname" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Username</span>
                      <input type="text" placeholder="Enter your username" name="username" id="username" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Email</span>
                      <input type="text" placeholder="Enter your email" name="email" id="email" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Date of Birth</span>
                      <input type="date" placeholder="Enter your number"  name="dateofbirth" id="dateofbirth" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Height</span>
                      <input type="text" placeholder="Enter your height" name="height" id="height" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Weight</span>
                      <input type="text" placeholder="Enter your weight" name="weight" id="weight" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Phone Number</span>
                      <input type="text" placeholder="Enter your number" name="phone" id="phone" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">State</span>
                      <input type="text" placeholder="Enter your state" name="state" id="state" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">District</span>
                      <input type="text" placeholder="Enter your district" name="district" id="district" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Locality</span>
                      <input type="text" placeholder="Enter your Locality"name="locality" id="locality" onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Password</span>
                      <input type="text" placeholder="Enter your Password" name="password" id="password" onChange={handleChange}  required/>
                    </div>
                  </div>
                  <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1" onChange={handleChange}/>
                    <input type="radio" name="gender" id="dot-2" onChange={handleChange}/>
                    <input type="radio" name="gender" id="dot-3" onChange={handleChange}/>
                    <span className="gender-title">Gender</span>
                    <div className="category">
                      <label for="dot-1">
                      <span className="dot one"></span>
                      <span  name="gender"className="gender">Male</span>
                    </label>
                    <label for="dot-2">
                      <span className="dot two"></span>
                      <span  name="gender"className="gender">Female</span>
                    </label>
                    <label for="dot-3">
                      <span className="dot three"></span>
                      <span  name="gender"className="gender">Prefer not to say</span>
                      </label>
                    </div>
                  </div>
                  <div className="button">
                    <input type="submit" value="Register"/>
                  </div>
                </form>
              </div>
            </div>
   </>
  )
}
export default CoachAtheie;

