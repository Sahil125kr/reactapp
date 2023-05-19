import React from "react";

// Admin Imports
// import MainDashboard from "views/admin/default";
// import NFTMarketplace from "views/admin/marketplace";
// import Profile from "views/admin/profile";
// import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

import AddNewCoach from "layouts/admin/components/addNewCoach";
import ReportStudent from "layouts/admin/components/reportStudent";
import ReportCoach from "layouts/admin/components/reportCoach";

import AdminDashboard from "layouts/admin/components/AdminDashboard";
import AiBranch from "layouts/admin/components/aiBranch";
// import ReportAdmin from "layouts/admin/components/reportAdmin";
import Workout from "layouts/admin/components/Workout";


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdFormatAlignJustify,
  MdVerifiedUser,
  MdPeople,
  MdBadge,
  MdReport,
  MdRateReview,
  MdPayments,
  MdPayment,
} from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import ReportAdmin from "layouts/admin/components/reportAdmin";
import AddNewStudent from "layouts/admin/components/addNewStudent";
import Package from "layouts/admin/components/Package";

const routes_admin = [
  {
    name: "Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <AdminDashboard />,
  },
  {
    name: "Coach Registration",
    layout: "/admin",
    path: "addNewCoach",
    icon: <MdPerson className="h-6 w-6" />,
    component: <AddNewCoach />,
    secondary: true,
  },
  {
    name: "Coach Details",
    layout: "/admin",
    path: "reportCoach",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ReportCoach />,
    secondary: true,
  },
  {
    name: "Students Registration",
    layout: "/admin",
    icon: <MdPeople className="h-6 w-6" />,
    path: "addNewStuden",
    component: <AddNewStudent/>,
  },
  {
    name: "Students Details",
    layout: "/admin",
    icon: <MdPeople className="h-6 w-6" />,
    path: "reportStudent",
    component: <ReportStudent/>,
  },

  {
    name: "Package",
    layout: "/admin",
    icon: <MdPeople className="h-6 w-6" />,
    path: "Package",
    component: <Package/>,
  },
  {
    name: "WorkOut",
    layout: "/admin",
    icon: <MdPeople className="h-6 w-6" />,
    path: "Workout",
    component: <Workout />,
  },
  {
    name: "AI Branch",
    layout: "/admin",
    path: "profile",
    icon: <MdBadge className="h-6 w-6" />,
    component: <AiBranch/>,
  },
  {
    name: "Report",
    layout: "/admin",
    path: "reprt",
    icon: <MdRateReview className="h-6 w-6" />,
    component: <ReportAdmin/>,
  },
  {
    name: "Payment",
    layout: "/admin",
    path: "payment",
    icon: <IoMdCash className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes_admin;
