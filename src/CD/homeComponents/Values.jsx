import React from "react";
import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../CD/Card";

const Values = () => {
	return (
		<section className="values">
			<div className="container values__container">
				<div className="values__left">
					<div className="values__image">
						<img src={Image} alt="values Image" />
					</div>
				</div>
				<div className="values__right">
					{/* <SectionHead icon={<GiCutDiamond />} title="Values" /> <br /> */}
					<h2>AI-Based Coaching Team</h2>
					<p>
					Our team of AI-powered coaches are committed and highly skilled in providing training.
				    <br /> We utilize cutting edge technology environment to optimize athlete's performance and minimize injuries.
					</p>
					<div className="values__wrapper" >
						{values.map(({ id, icon, title, desc }) => {
							return (
								// <div style={{background: 'black', color: 'yellow'}}>
								<Card className="values__value" key={id} >
									<span>{icon}</span>
									<h4>{title}</h4>
									<small>{desc}</small>
								</Card>
								// </div>
							);
						})}
					</div>
		
				</div>



				<div className="values__left">

					<h2>Data Driven Analysis</h2> <br />
					<p>
					Use AI and data visualisation to track and analyse athlete's performance data, providing insights into areas for improvement and strategies for enhancing performance.
					</p>
				</div>

				<div className="values__right">
				<h2>User Friendly Dashboard</h2>
				<p>
				Our dashboard provides interactive tools that leverage AI algorithms to generate a detailed analysis and offer recommendations for diet and workout regime, all presented in a user-friendly manner. Furthermore, we provide a report card feature to help track progress .
				</p>

				</div>

			</div>
		</section>
	);
};

export default Values;
