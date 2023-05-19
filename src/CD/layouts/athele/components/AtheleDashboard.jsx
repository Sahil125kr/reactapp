import React from 'react'
import { IoMdGift, IoMdHome, IoMdNutrition } from "react-icons/io";
import { IoDocuments, IoPeople, IoReader } from "react-icons/io5";
import Widget from "views/rtl/default/components/Widget";
import { MdBarChart, MdCountertops, MdDashboard, MdPausePresentation, MdPeople, MdReport } from "react-icons/md";
import Student_img from "../../../images/Student_img.png";
import AdminImg1 from "../../../images/gym1.png";
import AdminImg2 from "../../../images/gym2.png";
import AdminImg3 from "../../../images/gym3.png";
import '../css/style.css';
// import WeeklyRevenue from 'views/athele/default/components/WeeklyRevenue';
import StudentPerformance from './StudentPerformance';
const AtheleDashboard = () => {
  return (
    <>
         <br />
        <img src={Student_img } alt="VisionImage" /> 
         <br />
         <h2>Notification</h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdPeople className="h-7 w-7" />}
          title={"New Matches"}
          subtitle={""}
        />
        <Widget
          icon={<IoPeople className="h-6 w-6" />}
          title={"Progress Update"}
          subtitle={""}
        />
        <Widget
          icon={<MdReport className="h-7 w-7" />}
          title={"Counscling Availasility"}
          subtitle={""}
        />
        <Widget
          icon={<IoMdGift className="h-6 w-6" />}
          title={"Total Coaches"}
          subtitle={""}
        />
        <Widget
          icon={<MdPausePresentation className="h-7 w-7" />}
          title={"Total Types of Workout"}
          subtitle={""}
        />
        <Widget
          icon={<IoReader className="h-6 w-6" />}
          title={"No.of Session attended"}
          subtitle={""}
        />
       <Widget
          icon={<IoMdNutrition className="h-7 w-7" />}
          title={"Nutrition Plan"}
          subtitle={""}
        />
        <Widget
          icon={<MdCountertops className="h-6 w-6" />}
          title={"No. of Counselling"}
          subtitle={""}
        />
      </div>
      <br />
     
      <br />  
      <StudentPerformance/>
   



    </>
  )
}

export default AtheleDashboard;
