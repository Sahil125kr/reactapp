import React from 'react'

const CoachAiProgressTracker = () => {
  return (
    <>
       <br />
              <div className="containerAdmin">
              <div className="title">Athlete Performance Report Card </div>
              <div className="content">
               <h3 >Athlete Name : [ Athlete's Name ] Date : [ Date of Assessment ] </h3>
              </div>
               <hr />
              <div className="title">Physical Performance :  </div>
              <div className="content">
               <h3>Strength &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [ Strength Assessment Result ] </h3> 
               <h3>Speed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : [ Speed Assessment Result ] </h3>
               <h3>Endurance : [ Endurance Assessment Result ] </h3> 
               <h3>Flexibility &nbsp;&nbsp;&nbsp;&nbsp;: [ Flexibility Assessment Result ]  </h3>
              </div>
              <hr />
              <div className="title">Skill Development :   </div>
              <div className="content">
               <h3>Technical Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : [ Technical Skills Assessment Result ] </h3>
               <h3>Tactical Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : [ Tactical Skills Assessment Result ] </h3>
               <h3>Game Awareness : [ Game Awareness Assessment Result ]</h3>
              </div>
              <hr />
              <div className="title">Progress Summary :    </div>
              <div className="content">
             <h3>Overall Progress &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : [ Overall Progress Assessment Result ] </h3>
             <h3>Areas of Improvement : [ List of areas to focus on ] </h3>
             <h3>Notable Achievements : [ List of notable achievements ] </h3>
            </div>
            <hr />
            <div className="title">Coach's Feedback :     </div>
              <div className="content">
             <h3>[ Coach's personalized feedback and recommendations ] </h3>
            </div>
            <hr />
            <div className="title">Next Steps :      </div>
              <div className="content">
             <h3>[ Next steps and action plan for further improvement ]  </h3>
            </div>
            <hr />
            <h3>Thank you for your hard work and dedication ! Keep pushing yourself to new h and continue to strive for greatness.</h3>
            </div>
    </>
    
  )
}

export default CoachAiProgressTracker