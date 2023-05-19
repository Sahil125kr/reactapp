import React, { useState  } from "react";
import "./loginCoach.css";
import Header from "../../homeComponents/Header";
import HeaderImage from "../../images/header_bg_6.jpg";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Navbar from "homeComponents/Navbar";
import Footer from "homeComponents/Footer";
import Admin from "layouts/admin";

import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const LoginCoach = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post("http://127.0.0.1:5000/loginCoach", {
        username,
        password,
        });
        
        // handle the response appropriately
        console.log(response.data);
        if(response.status == 200){
        navigate("/coach");
        console.log('Successfully Login');
        } else {
        console.log("coming in else");
        }
        
    } catch (error) {
        console.log("coming in else");
        console.error(error);
        
    //   navigate('/registration');
    }

    };


    return (
        <>
        <Navbar />
           <Header title="Gt In Touch" image={HeaderImage}></Header>
            
            <section className="loginCoach">

                <div className="login-form" id="login">
                    {/* left side copy and paste from work section */}
                    <div className="w-left">
                        <div className="awesome">   
                        
                    </div>
                </div>

                {/* right side form */}
                <div className="l-right">
                        <form onSubmit={handleSubmit}>
                        <p></p>
                            <h1>Coach Login</h1>

                            <input type="text" className="user" required value={username}onChange={(event) => setUsername(event.target.value)} placeholder="Username:"/>
                            <input type="password" className="user" required value={password} onChange={(event) => setPassword(event.target.value)}placeholder="Password:"/>
                            <div>
                                <button class="btn btn-dark text-teal" type="submit" name="login">Login</button>
                            </div>
                            <h4 className='mt-3'>Back to Registration <span><NavLink to="/registration" style={{color: 'blue'}}>&nbsp;&nbsp; Sign Up</NavLink></span> </h4>
                        <p></p>
                        </form>
                </div>
                </div>

  
                
            </section>

            <Footer />
        </>
    );
};

export default LoginCoach;