import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="footer-logo" src={assets.logo} alt="" />
                <p>Thank you for choosing our food delivery app to satisfy your cravings. We're committed to delivering exceptional service and delicious meals right to your door. Bon appétit!</p>
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
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 12344-458</li>
                    <li>contact@flavorPal.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-cpyright">Copyright 2024 ©️ FlavorPal.com - All rights Reserved.</p>
    </div>
  )
}

export default Footer