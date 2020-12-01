import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { withStyles, Button, Menu, MenuItem } from "@material-ui/core";

const SimpleMenu = ({ menuName, subItems }) => {

    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickedClose = (href) => {
        setAnchorEl(null);
        history.push(href);
    }

    return (
        <div
            className="navLinks"
        >
            <button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="subButtonLink"
            >{menuName}</button>
            <Menu
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    subItems.map(({ href, children }) => {
                        return (
                            <MenuItem
                                key={`${href}MenuItem`}
                                onClick={() => {
                                    handleClickedClose(href);
                                }}
                                width="100%"
                                height="100%"
                            >
                                {children}
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </div>
    );
}

const NavBarLink = ({ href, children }) => {
    return (
        <NavLink
            activeClassName="currentLink"
            className="navLinks"
            to={href}
            isActive={(match, location) => {
                return (location.pathname === "/" && href === "/home") || (match ? match.isExact : false);
            }}
        >
            {children}
        </NavLink>
    )
}

export const Navbar = () => {
    const subMenuItems = [
        { href: "/calendar/chow", children: "Chow" },
        { href: "/calendar/moo", children: "Moo" }
    ];
    return (
        <nav>
            <div id="navbar">
                <NavBarLink href="/home">
                    Home
                </NavBarLink>
                <SimpleMenu menuName="Calendar" subItems={subMenuItems} />
                <NavBarLink href="/curriculum">
                    Curriculum
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
