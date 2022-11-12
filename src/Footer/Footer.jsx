import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';

import logo from '../img/logo.png'

const Footer = () => {
    return (
    <div className='footer'>

        <div className='locations'>
            <h1>FIND OUR RESTAURANTS</h1>   
            <p>1614 E. Bell Rd #104. Salerno, AZ 85022 (602) 867-1010</p>
            <p>204 E. Pizzetta Tommaso Sorrento, AZ 85022 (358) 867-1010</p>
            <p>Vale Puglia 54 Torre Del Greco AZ 85022 (359) 867-1010</p>
            <p>Corso Itali AA Naples, AZ 85022 (989) 867-1010</p>
        </div>

        <div className='center'>
            <img src={logo} alt="app logo" />

        <ul className='links'>
            <li className='p__opensans'>Home</li>
            <li className='p__opensans'>About us</li>
            <li className='p__opensans'>Menu</li>
            <li className='p__opensans'>Contact</li>
        </ul>

        <p>The Don Pizza crew first and foremost values an authentic, freshly baked slice of pizza perfection.</p>
        
         <div className='social-media'>
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaGoogle /></a>
         </div>
        </div>

        <div className='working'>
            <h1>WORKING HOURS</h1>
            <h2>MONDAY</h2><p>Kitchen Closed</p>
            <h2>TUSEDAY UNTIL FRIDAY</h2><p>9:00–22:00</p>
            <h2>SATURDAY </h2><p>11am to midnight</p>
            <h2>SUNDAY</h2><p>9:00–22:00</p>


        </div>
         
        
    </div>


    )
};

export default Footer;