import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save
import {useLocation} from "react-router-dom"; 
import {Link} from 'react-router-dom';
import "../css/style.css";


const CoachUploadVideo = () => {
  const search = useLocation().search;
  const student_id01 = new URLSearchParams(search).get("rstid");
  const [workout_reg, setWorkout_reg] = useState([]);
  const [student_reg, setstudent_reg] = useState([]);
    useEffect(() => {
        getTitle();
    }, []);
  
    function getTitle() {
        axios.get('http://127.0.0.1:5000/coachuploadvideo').then(function(response) {
            console.log(response.data);
            setWorkout_reg(response.data);
        });
    }
     
    
   
  return (
    <>
      
            <br /><br />
            <div className="containerAdmin">
              <div className="title"></div>
              <div className="content">
                <form>
                <div className="user-details">
                    <div className="input-box">
                      <span className="details">Student Id</span>
                      <label className="input-box"  id="abc">{student_id01}</label>
                       {/* <input type="text" placeholder="Enter your Student Id" name="student_id" id="student_id"/> */}
                    </div>
                    <div className="input-box">
                      <span className="details">Student Name</span>
                      {student_reg.map(student_reg=>(
                       <label key={student_reg.fullname}> {student_reg.fullname}</label>))}
                       {/* <input type="text" placeholder="Enter your student name" name="student_name" id="student_name"  required/> */}
                    </div>
                    <div className="input-box">
                      <span className="details">Coach Id</span>
                      <input type="text" placeholder="Enter your Coach id" name="coach_id" id="coach_id"  required/>
                    </div>
                    <div className="input-box">
                      <span className="details">Coach Name</span>
                      <input type="text" placeholder="Enter your Coach Name"  name="coach_name" id="coach_name"  required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Type of Exercise</span>
                  
                      <select className="select-box" name="experience" id="experience"  placeholder="Choose Exercise Type"  >    
                          <option className="input-box" value="">--------Select----------</option>
                          {workout_reg.map(workout_reg=>(
                          <option  className="input-box" value="" key={workout_reg._id}>{workout_reg.title}</option>

                            ))
                          }
                      </select>
                    </div>
                    <div className="input-box">
                      <span className="details">Uploded</span>
                      <input type="file" placeholder="Uploded your file" name="upload" id="upload"  required/>
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

export default CoachUploadVideo;
