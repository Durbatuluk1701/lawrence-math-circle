// Modified from https://material-ui.com/components/tabs/#nav-tabs

import React from 'react';
import { NavLink } from "react-router-dom";

const NavBarLink = ({ href, display }) => {
    return (
        <NavLink
            activeClassName="currentLink"
            to={href}
        >
            {display}
        </NavLink>
    )
}

export const Navbar = () => {
    return (
        <nav>
            <div id="navbar">
                <NavBarLink href="/home" display="Home" />
                <NavBarLink href="/calendar" display="Calendar" />
                <NavBarLink href="/about-us" display="About Us" />
                <NavBarLink href="/contact" display="Contact" />
            </div>
        </nav>
    );
}
