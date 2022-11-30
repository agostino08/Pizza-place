import React from 'react';
import "./Home.css";
import { Component } from 'react';

import { Fade } from "react-awesome-reveal";

import logo from '../img/logo.png'
import size1 from '../img/size1.png';
import size2 from '../img/size2.png';
import size3 from '../img/size3.png';
import pizzapepe from '../img/pizzapepe.jpg';



class Home extends Component {
    state={clicked: false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render () {

    return (
        <div className='home-main'>


         <div className='home'>

            <div className='navbar'>
           
           <img src={logo} alt="app logo" />
          

           <ul id='navbar-links' className={this.state.clicked ? ".navbar-links active" : ".navbar-links"} >
               <li className='nav-li'>Home</li>
               <li className='nav-li'>About us</li>
               <li className='nav-li'>Menu</li>
               <li className='nav-li'>Contact</li>
           </ul>

           

           <div className='mobile' onClick={this.handleClick}>
                <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               
           </div>

           <div className='navbar-login'>
               <a href="#login" className='p__opensans'>Log in / Register</a>
               <div />
               <a href="/" className='p__opensans'>Book Table</a>
               
           </div>
           
           
         </div>

             {/* <img className='pizza-home' src={pizzahome}/> */}

             <div className='home-info'>
                <Fade left><h1 className='title'>MANGIAMO LE PIZZE</h1>
                <h2 className='sub-title'>Our best secret in pizza: Ingredients of happiness and touches of joy.</h2></Fade>
                
                <div className='button-home'>
                  <button>ORDER NOW</button>
                  <button>BOOK TABLE</button>
            
                 </div>

             </div>
            
            </div>

            <div className='pizza-slice'>
                <div className='box'>
                    <h2>COME AND GET</h2>
                    <h1>SMART PIZZA SLICE BOX</h1>
                    <h4>Choose your perfect size of pizza, whatever you want</h4>
                    <p></p>
                    <div className='pizza-size'>
                        <div>
                        <h5>EORDER PIZZA</h5>
                        <img src={size1} alt="" />
                        </div>

                        <div>
                        <h5>SEPARATE BOX</h5>
                        <img src={size2} alt="" />
                        </div>

                        <div>
                        <h5>USE AS COASTER</h5>
                        <img src={size3} alt="" />
                        </div>

                        
                    </div>
                    
             </div>

             <img  className='pizza-box' src={pizzapepe} alt="" />
            </div>
            
        </div>
        
    )

}
}

export default Home;