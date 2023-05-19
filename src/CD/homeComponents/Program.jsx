import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../CD/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import Image2 from "../images/gym_work.gif";
// import Animation from "./Animation";


const Program = () => {
	return (
		<section className="programs">
				
			<div className="container programs container">
			<SectionHead icon={<FaCrown />} title="Programs" />
			<br />
			<div>
				<img src={Image2} alt="MainHeaderImage" />
		    </div>
			
				<div className="program__wrapper">
					{programs.map(({ id, icon, title, info, path }) => {
						return (
							// <div style={{background: 'black', color: 'yellow'}}>
							<Card  className="programs__program" key={id}>
								<span>{icon}</span>
								<h4>{title}</h4>
								<small>{info}</small>
								<Link to={path} className="btn sm">
									Learn More <AiFillCaretRight />
								</Link>
							</Card>
							// </div>
						);
					})}
				</div>
			</div>
			{/* <Animation/> */}
		</section>
	);
};

export default Program;
