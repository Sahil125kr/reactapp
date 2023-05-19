import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

// import "../css/style.css";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";

const NotFound = () => {
	return (
		
		<section>
			<Navbar />
				<div className="container notFound__container">
					<h2> Page Not Found </h2>
					<Link to="/" className="btn">
						Go back Home
					</Link>
				</div>
			<Footer />
		</section>
	);
};

export default NotFound;
