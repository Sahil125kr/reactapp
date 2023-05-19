import React from "react";

// Admin Imports
// import MainDashboard from "views/coach/default";
// import NFTMarketplace from "views/coach/marketplace";
// import Profile from "views/coach/profile";
// import DataTables from "views/coach/tables";

import CoachDashboard from "layouts/coach/components/CoachDashboard";
import CoachProfile from "layouts/coach/components/CoachProfile";
import CoachAthele from "layouts/coach/components/CoachAthele";
import CoachScheduleCalender from "layouts/coach/components/CoachScheduleCalender";
import CoachUploadVideo from "layouts/coach/components/CoachUploadVideo";
import CoachAiProgressTracker from "layouts/coach/components/CoachAiProgressTracker";
import CoachWorkout from "layouts/coach/components/CoachWorkout"; 
import StudentReport from "layouts/coach/components/StudentReport";
import CoachNutrition from "layouts/coach/components/CoachNutrition";
import CoachCounselling from "layouts/coach/components/CoachCounselling";
import MiniCalendar from "components_Coach/calendar/MiniCalendar";



// Auth Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdDateRange,
  MdNotifications,
  MdVideoLibrary,
  MdEditCalendar,
  MdTrackChanges,
  MdWork,
  MdCountertops,
} from "react-icons/md";
import { IoMdInformation, IoMdNutrition } from "react-icons/io";


const routes_coach = [
  {
    name: "Dashboard",
    layout: "/coach",
    path: "CoachDashbord",
    icon: <MdHome className="h-6 w-6" />,
    component: <CoachDashboard/>,
  },
  {
    name: "Profile",
    layout: "/coach",
    path: "CoachProfile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <CoachProfile/>,
  },

  {
    name: "My Students",
    layout: "/coach",
    icon: <MdDateRange className="h-6 w-6" />,
    path: "StudentReport",
    component: <StudentReport />,
  },
  {
    name: "Schedule Calender",
    layout: "/coach",
    icon: <MdEditCalendar className="h-6 w-6" />,
    path: "CoachScheduleCalende",
    component: <MiniCalendar />,
  },
  {
    name: "Upload Workout Video",
    layout: "/coach",
    icon: <MdVideoLibrary className="h-6 w-6" />,
    path: "CoachUploadVideo",
    component: <CoachUploadVideo />,
  },
  // {
  //   name: "Workout",
  //   layout: "/coach",
  //   icon: <MdWork className="h-6 w-6" />,
  //   path: "CoachWorkout",
  //   component: <CoachWorkout />,
  // },
  {
    name: "AI Progress Tracker",
    layout: "/coach",
    path: "CoachAiProgressTracker",
    icon: <MdTrackChanges className="h-6 w-6" />,
    component: <CoachAiProgressTracker />,
  },
  {
    name: "Nutrition",
    layout: "/coach",
    path: "CoachNutrition",
    icon: <IoMdNutrition className="h-6 w-6" />,
    component: <CoachNutrition />,
  },
  {
    name: "Counselling",
    layout: "/coach",
    path: "CoachCounselling",
    icon: <MdCountertops className="h-6 w-6" />,
    component: <CoachCounselling />,
  },
  // {
  //   name: "Log Out",
  //   layout: "/coach",
  //   path: "CoachAiProgressTracker",
  //   icon: <MdTrackChanges className="h-6 w-6" />,
  //   component: <CoachAiProgressTracker />,
  // },

];

// const routes1_coach = [
// {
//   name: "Student Registration",
//   layout: "/coach",
//   icon: <MdDateRange className="h-6 w-6" />,
//   path: "CoachAthele",
//   component: <CoachAthele />} ];
  export default routes_coach;


