// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import React,{} from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Registration from "./pages/registration/registration";
import Login from "./pages/login/login";

import LoginAdmin from "pages/loginAdmin/loginAdmin";
import LoginCoach from "pages/loginCoach/loginCoach";

import StudentReport from "layouts/coach/components/StudentReport";

import CoachAtheie from "layouts/coach/components/CoachAthele";
// import LoginAdmin from "pages/loginAdmin/LoginAdmin";
// import LoginCoach from "pages/loginCoach/LoginCoach";

//--------------- Admin Import ------------------
import Coach from "./layouts/coach/coach";
import AdminLayout from "./layouts/admin";
import Athele from "./layouts/athele/athele";


const App = () => {
	return (
		<BrowserRouter>
			
			<Routes>
				{/*-----------------Website--------------------------*/}
				<Route path="/"element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="plans" element={<Plans />} />
				<Route path="trainers" element={<Trainers />} />
				<Route path="contact" element={<Contact />} />
				<Route path="registration" element={<Registration />} />
				<Route path="login" element={<Login />} />
				<Route path="loginAdmin" element={<LoginAdmin />} />
				<Route path="loginCoach" element={<LoginCoach />} />
			
				{/*--------------------------------------------------*/}


                {/*--------------------------Admin---------------------------------------*/}
				<Route exect path="admin/*" element={<AdminLayout />} />

			    {/*--------------------------Coach-----------------------------------------*/}
				<Route exect path="coach/*" element={<Coach />} />
				<Route exect path="CoachAtheie/*" element={<CoachAtheie/>} />

                {/*-------------------------Student-----------------------------------------*/}
		     	<Route exect path="athele/*" element={<Athele />} />

				{/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}

				<Route path="*" element={<NotFound />} />
			</Routes>
		
		</BrowserRouter>
	);
};

export default App;
