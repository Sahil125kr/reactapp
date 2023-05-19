import React from "react";
// import "../css/style.css";
import "./about.css";
import Header from "../../homeComponents/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";

const About = () => {
	return (
		<> 
		<Navbar />
			<Header title= "About us" image={HeaderImage}>
			
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<h3>Who are we?</h3>
						<p>
						Wecoach.ai provides a platform for coaches and athletes to communicate and collaborate by sharing data and insights to improve performance.  
						</p>
						<h3>What we offer?</h3>
						<p>
						We offer AI powered coaching services to individual athletes and organisations, with a user friendly dashboard that enables them to view their current performance in real time and also generate a blueprint for their future goals and aspirations. 
						</p>

					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
						We aspire to become the torch bearers for next generation athletes. We hope to use this platform for building a community that addresses the challenges faced by an aspiring athlete and collaborate to improve their lives on and off the court. 
						</p>

					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
						"Our mission is to make AI-powered sports coaching accessible and affordable for athletes and coaches at all levels and help them reach their full potential through personalized coaching and data-driven insights. .
						</p>

					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Values</h1>
						<p>
						We are committed to delivering high-quality, innovative, and personalized training solutions while fostering a culture of collaboration, accountability, and respect.
						</p>

					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>
			
			<Footer />
		</>
	);
};

export default About;
