import React from 'react'
import './Footer.css'
import { assets } from "../../assets/assets";
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>A restaurant (sometimes known as a diner) is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-892323892</li>
                        <li>Contac.@tomoto.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">Copyright 2024 Tomoto.com -All Right Reserved.</p>
        </div>
    )
}

export default Footer
