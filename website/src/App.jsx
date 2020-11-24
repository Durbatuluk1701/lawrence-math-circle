import React from "react"
import { Navbar } from "./components"

const pageValues = {
    "home": 0,
    "calendar": 1,
    "about-us": 2,
    "contact": 3
}

const hrefToKey = () => {
    return pageValues[(window.location.href.split("/").reverse()[0])];
}


export const App = () => {
    return (
        <>
            <img id="logo" src="./logo.png" alt="Cannot Be Displayed"/>
            <Navbar defValue={hrefToKey()} />
        </>
    )
}