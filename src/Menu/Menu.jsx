import React from "react";
import './Menu.css';

import pizzamenu from '../img/pizzahome.jpg';


const Menu = () => {
    return (
        <div className="menu-div">

          <div className="menu-container">
          <h1 className="menu.title">MENU</h1>
          </div>

          <div className="menu-food">

            <h2 className="catering">ASK ABOUT OUR CATERING MENU!</h2>

            <h1>SECIALITY PIZZA</h1>

          <div>

              
            <div className="menu-pizza">
              <h2>NYCP SPECIAL</h2>
              <h5>Pepperoni, sausage, bell pepper, onion and mushroom</h5>
              <h4>30.50</h4>
            </div>

            <div>
              <h2>VEGETARIAN</h2>
              <h5>Mushroom, bell pepper, onion, tomato and artichoke</h5>
              <h4>27.50</h4>
            </div>

            <div>
              <h2>BBQ CHICKEN PIZZA</h2>
              <h5>Housemade Jack Daniels BBQ sauce, BBQ fried chicken, bacon, mozzarella and cheddar cheeses</h5>
              <h4>15.95</h4>
            </div>

            <div>
              <h2>MEAT LOVERS</h2>
              <h5>Pepperoni, sausage, meatball, ham and bacon</h5>
              <h4>32</h4>
            </div>

            <div>
              <h2>WHITE PIZZA</h2>
              <h5>Housemade ricotta white sauce, mozzarella and romano cheese</h5>
              <h4>26</h4>
            </div>

              </div>

            

            
          </div>

          

       


        </div>
    )
};

export default Menu;