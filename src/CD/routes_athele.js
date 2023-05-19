import React from "react";

// Admin Imports
// import MainDashboard from "views/athele/default";
// import NFTMarketplace from "views/athele/marketplace";
// import Profile from "views/athele/profile";
// import DataTables from "views/athele/tables";
// import RTLDefault from "views/rtl/default";

// Athele Imports
import AtheleDashboard from "layouts/athele/components/AtheleDashboard";
import AtheleProfile from "layouts/athele/components/AtheleProfile";
import AtheleMyCoach from "layouts/athele/components/AtheleMyCoach";
import AtheleSchedule from "layouts/athele/components/AtheleSchedule";
import AtheleAiProgressTracker from "layouts/athele/components/AtheleAiProgressTracker";
import AtheleNutrition from "layouts/athele/components/AtheleNutrition";
import AtheleCounselling from "layouts/athele/components/AtheleCounselling";



// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdNotifications,
  MdReport,
  MdRateReview,
  MdPeople,
  MdSchedule,
  MdTrackChanges,
} from "react-icons/md";
import { IoMdNutrition } from "react-icons/io";

const routes_athele = [
  {
    name: "Dashboard",
    layout: "/athele",
    path: "athele",
    icon: <MdHome className="h-6 w-6" />,
    component: <AtheleDashboard/>,
  },

  {
    name: "Profile",
    layout: "/athele",
    path: "atheleProfile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <AtheleProfile/>,
    secondary: true,
  },
  {
    name: "My Coach",
    layout: "/athele",
    path: "atheleMyCoach",
    icon: <MdPeople className="h-6 w-6" />,
    component: <AtheleMyCoach/>,
  },
  {
    name: "Schedule",
    layout: "/athele",
    path: "atheleSchedule",
    icon: <MdSchedule className="h-6 w-6" />,
    component: <AtheleSchedule/>,
  },
  {
    name: "AI Progress Tracker",
    layout: "/athele",
    path: "atheleAiProgressTracker",
    icon: <MdTrackChanges className="h-6 w-6" />,
    component: <AtheleAiProgressTracker/>,
  },
  {
    name: "Nutrition",
    layout: "/athele",
    path: "atheleNutrition",
    icon: <IoMdNutrition className="h-6 w-6" />,
    component: <AtheleNutrition/>,
  },
  {
    name: "Counselling",
    layout: "/athele",
    path: "atheleCounselling",
    icon: <MdRateReview className="h-6 w-6" />,
    component: <AtheleCounselling/>,
  },
];
export default routes_athele;
