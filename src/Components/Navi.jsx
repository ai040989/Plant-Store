import React from "react";
import { Link } from "react-router-dom";
import './Navi.css';

function Navi(){
    return(
        <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="logo">
            <h1>Navbar</h1>
          </div>
          <div className="menu-items">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
    );

}


export default Navi;