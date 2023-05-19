import React from "react";
// import "../css/style.css";
import Header from "../../homeComponents/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { trainers } from "../../data";
import Trainer from "../../homeComponents/Trainer";
import "./trainers.css";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";

const Trainers = () => {
	return (
		<>
		<Navbar />
			<Header image={HeaderImage} title="Our Trainers">
              
			</Header>
			<section className="trainers">
				<div className="container trainers__container">
					{trainers.map(({ id, image, name, job, socials }) => {
						return (
							<Trainer
								key={id}
								image={image}
								name={name}
								job={job}
								socials={[
									{ icon: <BsInstagram />, link: socials[0] },
									{ icon: <AiOutlineTwitter />, link: socials[1] },
									{ icon: <FaFacebookF />, link: socials[2] },
									{ icon: <FaLinkedinIn />, link: socials[3] },
								]}
							/>
						);
					})}
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Trainers;
