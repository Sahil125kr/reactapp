import React, { useState  } from "react";
import "../css/workout.css";
import axios from "axios";

import { NavLink } from 'react-router-dom'

import { useNavigate } from "react-router-dom";
const Workout = () => {
  const navigate = useNavigate();
  
    const [inputs, setInputs] = useState([]);
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://127.0.0.1:5000/workout', inputs).then(function(response){
        console.log(response.data);
        navigate('/coach/CoachUploadVideo');
       
      });
    }
  return (
   <>
   <br />
          <div class="wrapper">
          {/* <h2>Registration</h2> */}
          <form onSubmit={handleSubmit}>
            <div class="input-box">
              <input type="text"  name="workout_id" id="workout_id"placeholder="Enter workout Id "  onChange={handleChange} required/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Title"name="title"  id="title"  onChange={handleChange} required/>
            </div>
            <div class="input-box">
              <textarea className="from-control" type="text" placeholder=" Description"  name="description" id="description" onChange={handleChange} required></textarea>
            </div>
            <div class="policy">
              <input type="checkbox"/>
              <h3>I accept all terms & condition</h3>
            </div>
            <div class="input-box button">
              <input type="Submit" value="Submit"/>
            </div>
          </form>
        </div>
   </>
  )
}

export default Workout;