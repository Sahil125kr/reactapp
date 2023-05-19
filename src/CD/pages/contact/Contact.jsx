import React from "react";
// import "../css/style.css";
import "./contact.css";
import Header from "../../homeComponents/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";

const Contact = () => {
	return (
		<>
			<Navbar />
		   <Header title="Gt In Touch" image={HeaderImage}></Header>    
			<section className="contact">

				<div className="contact-form" id="contact">
				{/* left side copy and paste from work section */}
				<div className="w-left">
					<div className="awesome">	
					<center>
					<h1>			
						<span style={{color: 'yellow'}}>Get in Touch </span> <br />
						<span style={{color: 'red'}}>Contact me</span>
					</h1>
					<br />
					
						<div>
							<iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.175783118311!2d77.30518664036347!3d28.582135274138658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45e3eccb8a7%3A0xd5eb60e62b19e6ba!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1683006538712!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</center>
				</div>
				</div>

				{/* right side form */}
				<div className="c-right">
					<form>
						<p></p>
					<h1>Contact Form</h1>
					<input type="text" name="user_name" className="user"  placeholder="Name"/>
					<input type="email" name="user_email" className="user" placeholder="Email"/>
					<input type="number" name="user_email" className="user" placeholder="Mobile No."/>
					<textarea name="message" className="user" placeholder="Message"/>
                 
					
					<div>
                         <button class="btn btn-dark text-teal">Contact</button>
                     </div>
					</form>
				</div>
				</div>

  
				
			</section>

			<Footer />
		</>
	);
};

export default Contact;
