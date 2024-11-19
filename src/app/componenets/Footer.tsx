import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>  
        <div className='icons'>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        
        </div>

        <div className='text'>
            <p>Copyright ©2020 All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer