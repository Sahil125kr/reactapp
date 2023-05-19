import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import Login from "pages/login/login";
import LoginAdmin from "pages/loginAdmin/loginAdmin"; 
import LoginCoach from "pages/loginCoach/loginCoach";

// import { coach } from "layouts/coach";
// import { athele }  from"layouts/athele"
// import { Admin } from "layouts/admin";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
					We provide AI powered training, highly skilled in-house coaches and personalised roadmap for success in the field of sports.
					</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://facebook.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="https://instagram.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>				
					<Link to="/contact">Contact</Link>
					<Link to="/registration">Sign Up</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="">Blog</Link>
					<Link to="">Case Studies</Link>
					<Link to="">Events</Link>
					<Link to="">Communities</Link>
					<Link to="/contact">FAQs</Link>
				</article>
				{/* <article>
					<h4>Get In Touch</h4>
					<Link to="./admin">Admin Login</Link>
					<Link to="./Coach">Coach Login</Link>
					<Link to="./Athele">User Login</Link>
				</article> */}
				<article>
					<h4>Get In Touch</h4>
					<Link to="/LoginAdmin">Admin Login</Link>
					<Link to="/LoginCoach">Coach Login</Link>
					<Link to="/Login">User Login</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<div>
					<h4>&copy; 2023 WECOACH.AI - ALL RIGHTS RESERVED.</h4> <br />
				</div>
				<div>
					<h4>Designed & Developed by 
						<a href="https://www.infoerasoftware.com/"> <span style={{color: 'blue'}}> Info Era Software Services Pvt. Ltd.</span></a> </h4> 
						
				</div>
			</div>
			
		</footer>
	);
};

export default Footer;
