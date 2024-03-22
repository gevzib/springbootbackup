import React, {useState, useReducer, useEffect} from "react";

import {Link, NavLink} from "react-router-dom";
import "../styles/Nav.css"



export const Nav = () => {

    const[menuOpen, setMenuOpen] = useState(false)

    return (
    
    <nav>

        <Link to ="/" className="title" >QA ESTATES</Link>
        
        <div className="menu" onClick={()=> {setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <ul className={menuOpen ? "open" : ""}>   

            <li>
                <NavLink to="/">Logout</NavLink>
            </li>         

            <li>
                <NavLink to="/properties">Properties</NavLink>
            </li>
            <li>
                <NavLink to="/Buyer">Buyers</NavLink>
            </li>
            <li>
                <NavLink to="/Seller">Sellers</NavLink>
            </li>
        </ul>
    </nav>
    
    );
};