// Modified from https://material-ui.com/components/tabs/#nav-tabs

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

export const Navbar = ({defValue}) => {
    const [value, setValue] = React.useState(defValue ? defValue : 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs"
        >
            <Tab label="Home" href="/home" {...a11yProps(0)} />
            <Tab label="Calendar" href="/calendar" {...a11yProps(1)} />
            <Tab label="About Us" href="/about-us" {...a11yProps(2)} />
            <Tab label="Contact" href="/contact" {...a11yProps(3)} />
        </Tabs>
    );
}
