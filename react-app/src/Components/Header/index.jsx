import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
    
    return <div>
        <ul className="navlinks">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/input">Input</NavLink></li>
        </ul>
    </div>
}