import React from 'react'
import { IoMdGift, IoMdHome } from "react-icons/io";
import { IoDocuments, IoPeople, IoReader } from "react-icons/io5";
import Widget from "views/rtl/default/components/Widget";
import { MdBarChart, MdDashboard, MdPausePresentation, MdPeople, MdReport } from "react-icons/md";
import Admin_img from "../../../images/Admin_img.png";
import AdminImg1 from "../../../images/gym1.png";
import AdminImg2 from "../../../images/gym2.png";
import AdminImg3 from "../../../images/gym3.png";
import '../css/style.css';
const AdminDashboard = () => {
  return (
  <> 
  <br />
 <img src={Admin_img } alt="VisionImage" />  
 <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdPeople className="h-7 w-7" />}
          title={"Total Coaches"}
          subtitle={"50"}
        />
        <Widget
          icon={<IoPeople className="h-6 w-6" />}
          title={"Total Students"}
          subtitle={"642"}
        />
        <Widget
          icon={<MdReport className="h-7 w-7" />}
          title={"New Registrations"}
          subtitle={"400"}
        />
        {/* <Widget
          icon={<IoMdGift className="h-6 w-6" />}
          title={"No. of Package"}
          subtitle={"1,000"}
        /> */}
        <Widget
          icon={<MdPausePresentation className="h-7 w-7" />}
          title={"Purchesced Pakage"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoReader className="h-6 w-6" />}
          title={"Total Amount Record"}
          subtitle={"$2433"}
        />
      </div>
  {/* <!-- Trainers Section --> */}
    <section id="trainers" className="bg-light p-7 text-center text-teal">
        <div className="container-admin">
            {/* <div className="row">
                <div className="col">
                    <h1>Quick Links</h1>
                </div>
            </div> */}
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                        <img src={AdminImg1 } alt="VisionImage" />          
                            {/* <h3 className="mt-3">Total Coach</h3> */}
   

                        </div>
                    </div>
                    <p><br /></p>
                </div>

                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                           <img src={AdminImg2 } alt="VisionImage" /> 
                            {/* <h3 className="mt-3">Total Studen</h3> */}


                        </div>
                    </div>
                    <p><br /></p>
                </div>

                <div className="col-md-4">
                    <div className="card trainer-card text-dark">
                        <div className="card-body">
                        <img src={AdminImg3 } alt="VisionImage" /> 
                            {/* <h3 className="mt-3">Students</h3> */}
                            
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  
  </>
  )
}

export default AdminDashboard;
