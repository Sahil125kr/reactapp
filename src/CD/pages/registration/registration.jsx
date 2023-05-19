import React, { useState  } from "react";
// import "../css/style.css";
import "./registration.css";
import Header from "../../homeComponents/Header";
import HeaderImage from "../../images/header_bg_6.jpg";
import { NavLink } from 'react-router-dom'

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";



const Registration = () => {
	const navigate = useNavigate();
  
    const [inputs, setInputs] = useState([]);
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
	const handleSubmit = (event) => {
        event.preventDefault();
  
        axios.post('http://127.0.0.1:5000/useradd', inputs).then(function(response){
            console.log(response.data);
            navigate('/login');
        });
          
    }
	return (
		<>
		<Navbar />
		   <Header title="Gt In Touch" image={HeaderImage}></Header>
            
			<section className="registration">

				<div className="registration-form" id="registration">
				    {/* left side copy and paste from work section */}
					<div className="w-left">
						<div className="awesome">	
						<center>
						
						</center>
					</div>
				</div>

				{/* right side form */}
				<div className="r-right">
						<form onSubmit={handleSubmit} >
							<p></p>
							<h1>Registration Form</h1>
							<input type="text" name="uid" className="user"  placeholder="Wecoach_001" onChange={handleChange}/>
							<input type="text" name="name" className="user"  placeholder="Name" onChange={handleChange}/>
							<input type="date" name="dateofbirth" className="user"  placeholder="DOB" onChange={handleChange}/>
							<input type="text" name="phone" className="user" placeholder="Phone No." onChange={handleChange}/>
							<input type="email" name="email" className="user" placeholder="Email" onChange={handleChange}/>	
							<input type="text" name="state" className="user" placeholder="State" onChange={handleChange}/>
							<input type="text" name="district" className="user" placeholder="District" onChange={handleChange}/>
							<input type="text" name="locality" className="user" placeholder="Locality" onChange={handleChange}/>

							<input type="text" name="username" className="user" placeholder="Username" onChange={handleChange}/>
							<input type="password" name="password" className="user" placeholder="Password" onChange={handleChange}/>

							<div>
								<button class="btn btn-dark text-teal"  type="submit" name="add">Submit</button>
							</div>
				
							<h3 className='mt-3'>Already Have an Account <span><NavLink to="/login" style={{color: 'blue'}}>&nbsp;&nbsp;  Sign In</NavLink></span> </h3>
							
						</form>
						
				</div>
				</div>		
				<p>
				<br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br />	
				</p>	
				
			</section>

			<Footer />
		</>
	);
};

export default Registration;
