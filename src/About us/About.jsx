import React from "react";
import "./About.css"

import Carousel from 'react-bootstrap/Carousel';

import pizzarestaurant from '../img/pizza-restaurant.jpg'
import pizzaiolo from '../img/pizzaiolo.jpg'
import pizzaplace from '../img/pizzaplace.png'

import sign from '../img/sign.png'



const About = () => {
    return (
        <div className='about'>

            <div className="pizza-restaurant">

            <Carousel>
                <Carousel.Item>
                    <img src={pizzarestaurant} alt="" />
                    <Carousel.Caption>
                    <h3>Pizza comete esta</h3>
                    <p>Comete esta con muzarella</p>
                </Carousel.Caption>
                </Carousel.Item> 

                <Carousel.Item>
                    <img src={pizzaiolo} alt="" />
                    <Carousel.Caption>
                    <h3>Pizza comete esta</h3>
                    <p>Comete esta con muzarella</p>
                </Carousel.Caption>
                </Carousel.Item>  

                <Carousel.Item>
                    <img src={pizzaplace} alt="" />
                    <Carousel.Caption>
                    <h3>Pizza comete esta</h3>
                    <p>Comete esta con muzarella</p>
                </Carousel.Caption>
                </Carousel.Item>  

            </Carousel>
                
                 {/* <div className="img-container">
                 <img src={pizzarestaurant} alt='pizza img' />
                 </div>

             <div className="quote">
                <h1>"</h1>
                <p>FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST WORLD CLASS PIZZA SLICE.</p>
                <h3>WASHINGTON POST, 2019.</h3>
            </div> */}

            </div>

    

            <div className="info">
                <h1>Our story</h1>
                <p>Don Pizza started with the idea of giving people the experience of great food, made from simple ingredients. From all of the housemade sauces and dressings to the daily made dough and mozzarella. Our belief has always been to give our customers the best possible cuisine, beginning with our pizzas, to our pastas and entrees, to subs, salads and appetizers.</p>

                <p>We strive every day to be the best we can be and are always improving. That's why we believe at New York City Pizza, the "Little things are the difference between good and Great"!</p>

                <img className="sign" src={sign} alt="" />
            </div>

        </div>
        
    )
};

export default About;