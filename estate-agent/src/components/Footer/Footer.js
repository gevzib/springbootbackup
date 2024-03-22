import React from "react";

import {Link, NavLink} from "react-router-dom";
import "./Footer.css";




export const Footer = () => {

    

    return (
    
    <footer>

        <Link to ="/" className="title" >QA ESTATES</Link>
        
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/property">Properties</NavLink>
            </li>
            <li>
                <NavLink to="/Buyer">Buyer</NavLink>
            </li>
            <li>
                <NavLink to="/Seller">Seller</NavLink>
            </li>
        </ul>
    </footer>
    );
};