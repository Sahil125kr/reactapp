import React from "react";
// import "../css/style.css";

import "./home.css";
import MainHeader from "../../homeComponents/MainHeader";
import Program from "../../homeComponents/Program";
import Values from "../../homeComponents/Values";
import FAQs from "../../homeComponents/FAQs";
import Testimonial from "../../homeComponents/Testimonial";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";
import Animation from "homeComponents/Animation";

const Home = () => {
	return (
		<>
		<Navbar />
			<MainHeader />
			<Program />
			<Animation/>
			<Animation/>
			<Animation/>
			<Values />
			<FAQs />
			<Testimonial />
			
		<Footer />
		
		</>
	);
};

export default Home;
