import React from 'react'
import { IoMdGift, IoMdHome, IoMdPeople, IoMdVideocam } from "react-icons/io";
import { IoDocuments, IoNutrition, IoPeople, IoReader } from "react-icons/io5";
import Widget from "views/rtl/default/components/Widget";
import { MdArrowRight, MdArrowUpward, MdBarChart, MdCountertops, MdDashboard, MdPausePresentation, MdPeople, MdReport, MdRotateRight } from "react-icons/md";
import Coach_img from "../../../images/Coach_img.png";
// import AdminImg1 from "../../../images/gym1.png";
// import AdminImg2 from "../../../images/gym2.png";
// import AdminImg3 from "../../../images/gym3.png";
import '../css/style.css';
const CoachDashboard = () => {
  return (
    <>
    <br />
       <img src={Coach_img } alt="VisionImage" /> 
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdPeople className="h-7 w-7" />}
          title={"Total Coach"}
          subtitle={""}
        />
        <Widget
          icon={<IoPeople className="h-6 w-6" />}
          title={"Total Student"}
          subtitle={""}
        />
        <Widget
          icon={<MdPeople className="h-7 w-7" />}
          title={"My Students"}
          subtitle={""}
        />
        <Widget
          icon={<IoMdPeople className="h-6 w-6" />}
          title={"Attendance"}
          subtitle={""}
        />
        <Widget
          icon={<MdArrowUpward className="h-7 w-7" />}
          title={"Top Performer"}
          subtitle={""}
        />
        <Widget
          icon={<IoMdVideocam className="h-6 w-6" />}
          title={"Upload Video"}
          subtitle={""}
        />
                <Widget
          icon={<IoMdVideocam className="h-6 w-6" />}
          title={"Video"}
          subtitle={""}
        />
        <Widget
          icon={<MdCountertops className="h-7 w-7" />}
          title={"Counselling"}
          subtitle={""}
        />
        <Widget
          icon={<IoNutrition className="h-6 w-6" />}
          title={"Nutrition"}
          subtitle={""}
        />
      </div>

    </>
  )
}

export default CoachDashboard;