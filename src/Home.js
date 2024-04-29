import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.css'
function Navbar (){
    return(
        <>
        <div id="hero-img">
    
    <h1 id="p">Products By Rajlee Innovations Pvt Ltd</h1>
    
    </div>
    <footer className="footer-container">
      <div className="footer-content">
        <h2>Rajlee Innovation Pvt Ltd</h2>
        <div className="social-icons">
          <Link to="https://www.facebook.com/rajleeinnovation" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
          <Link to="https://twitter.com/rajleeinnovation" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link to="https://www.instagram.com/rajleeinnovation" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
          <Link to="https://www.linkedin.com/company/rajleeinnovation" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Link>
        </div>
      </div>
    </footer>
        </>
    )
}
export default Navbar