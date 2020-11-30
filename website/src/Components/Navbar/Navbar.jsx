import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";

const DropDown = ({ subMenuItems }) => {
    const [show, setShow] = useState(false);

    const createElement = ({ href, children }, index) => {
        let position = document.getElementById("dropdown1").getBoundingClientRect();
        console.log(position);
        let newElem = document.createElement("div");
        newElem.className = "navLinks"
        newElem.style.width = `${position.width}px`;
        newElem.style.height = `${position.height}px`;
        newElem.style.position = "absolute";
        newElem.style.zIndex = "10";
        newElem.style.top = `${position.y}px`;
        newElem.style.left = `${position.x}px`;
        newElem.innerHTML = children;
        document.body.before(newElem);
    }

    const kickOff = () => {
        setShow(!show);
        subMenuItems.forEach(({ href, children }, index) => {
            createElement({ href, children }, index);
        })
    }

    return (
        <div
            id="dropdown1"
            className="navLinks"
            onClick={() => {
                kickOff();
            }}>
            {
                show ? "" : "\\/"
            }
        </div>
    )
}


const SimpleMenu = ({ menuName, subItems }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {menuName}
            </Button>
            <Menu
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
                                onClick={handleClose}
                            >
                                <NavBarLink
                                    key={`${href}NavLink`}
                                    href={href}
                                >
                                    {children}
                                </NavBarLink>
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
