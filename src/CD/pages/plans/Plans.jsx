import React from "react";
// import "../css/style.css";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../homeComponents/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../CD/Card";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";

const Plans = () => {
	return (
		<>
			<Navbar />
			<Header title="Membership Plans" image={HeaderImage}>

			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`$ ${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Choose Plan</button>
							</Card>
						);
					})}
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Plans;
