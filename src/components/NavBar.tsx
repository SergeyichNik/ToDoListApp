import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper px1 pink darken-1">
                <a href="/" className="brand-logo">React +TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to={'/'}>To do list</NavLink ></li>
                    <li><NavLink  to={'/about'}>Information</NavLink ></li>
                </ul>
            </div>
        </nav>
    )
}