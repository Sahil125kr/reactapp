import React from 'react'
import AdminAIImage1 from "../../../images/adminAi1.png";
import AdminAIImage2 from "../../../images/adminAi2.png";
import AdminAIImage3 from "../../../images/adminAi3.png";
// import AdminImg1 from "../../../images/gym1.png";

import '../css/style.css';
const AiBranch = () => {
  return (
    <>

     {/* <!-- AI Branch Section --> */}
     <section id="trainers" className=" text-center text-teal">
        <div className="container-admin">

            <div className="row">
                <div className="col">
                    <h1>Quick Links</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                        <img src={AdminAIImage1 } alt="VisionImage" />          
                            <h3 className="mt-3">Admin</h3>
  
                        </div>
                    </div>
                    <p><br /></p>
                </div>

                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                           <img src={AdminAIImage2 } alt="VisionImage" /> 
                            <h3 className="mt-3">Coach</h3>


                        </div>
                    </div>
                    <p><br /></p>
                </div>

                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                        <img src={AdminAIImage3 } alt="VisionImage" /> 
                            <h3 className="mt-3">Students</h3>
                            
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    </>
  )
}

export default AiBranch;