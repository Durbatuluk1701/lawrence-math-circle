import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";

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
                                    setAnchorEl(null);
                                    history.push(href);
                                    handleClickedClose(href);
                                }}
                                classes={{
                                    root: "subMenuLinks"
                                }}
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
    return (
        <nav>
            <div id="navbar">
                <NavBarLink href="/home">
                    Home
                </NavBarLink>
                <SimpleMenu
                    menuName="Program"
                    subItems={[
                        { href: "/program/6th-graders", children: "6th Graders" },
                        { href: "/program/curriculum", children: "Curriculum" }
                    ]}
                />
                <SimpleMenu
                    menuName="About LMC"
                    subItems={[
                        { href: "/about-lmc/people", children: "People" },
                        { href: "/about-lmc/mission-statement", children: "Mission Statement" }
                    ]}
                />
                <SimpleMenu
                    menuName="Others"
                    subItems={[
                        { href: "/others/gallery", children: "Gallery" },
                        { href: "/others/archive", children: "Archive" },
                        { href: "/others/faq", children: "Frequently Asked Questions" }
                    ]}
                />
                <NavBarLink href="/contact">
                    Contact
                </NavBarLink>
            </div>
        </nav>
    );
}
