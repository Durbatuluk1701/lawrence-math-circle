import React from "react"
import {
    Header,
    Home,
    DeadLanding,
    Contact,
    AboutUs,
    Calendar
} from "../../Components"
import { Route, Switch } from "react-router-dom"

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
            <Header navHref={hrefToKey()} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/about-us">
                    <AboutUs />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="*">
                    <DeadLanding />
                </Route>
            </Switch>
        </>
    )
}