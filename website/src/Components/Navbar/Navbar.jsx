// Modified from https://material-ui.com/components/tabs/#nav-tabs

import React from 'react';
import { NavLink } from "react-router-dom";

const NavBarLink = ({ href, children }) => {
    return (
        <NavLink
            activeClassName="currentLink"
            to={href}
        >
            {children}
        </NavLink>
    )
}

export const Navbar = () => {
    return (
        <nav>
            <div id="navbar">
                <NavBarLink href="/home">
                    Home
                </NavBarLink>
                <NavBarLink href="/calendar">
                    Calendar
                </NavBarLink>
                <NavBarLink href="/about-us">
                    About Us
                </NavBarLink>
                <NavBarLink href="/contact">
                    Contact
                </NavBarLink>
            </div>
        </nav>
    );
}
