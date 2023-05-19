import React from 'react'

import AdminImg1 from "../../../images/gym1.png";
import AdminImg2 from "../../../images/gym2.png";
import AdminImg3 from "../../../images/gym3.png";
import '../css/style.css';
const ReportAdmin = () => {
  return (
    <>
     {/* <!-- Trainers Section --> */}
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
                        <img src={AdminImg1 } alt="VisionImage" />          
                            <h3 className="mt-3">Admin</h3>
   

                        </div>
                    </div>
                    <p><br /></p>
                </div>

                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                           <img src={AdminImg2 } alt="VisionImage" /> 
                            <h3 className="mt-3">Coach</h3>


                        </div>
                    </div>
                    <p><br /></p>
                </div>

                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                        <img src={AdminImg3 } alt="VisionImage" /> 
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

export default ReportAdmin;
