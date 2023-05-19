import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.gif";
// import Image from "../images/gym.json";


const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h2> Transforming Athlete's Life <br /></h2>
					<p>
					   We provide AI powered training, highly skilled in-house coaches and personalised roadmap for success in the field of sports.
					</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<img src={Image} alt="MainHeaderImage" />
				{/* <div className="main__header-right">
					<div className="main__header-circle"></div>
					   <div className="main__header-image">
						
                       </div>
					</div>
				</div> */}
				
				
			
			</div>

		</header>
	);
};

export default MainHeader;
