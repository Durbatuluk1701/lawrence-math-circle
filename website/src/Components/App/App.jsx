import React from "react"
import { Header, Home } from "../../Components"
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
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="*">
                    <h2>Lost</h2>
                </Route>
            </Switch>
        </>
    )
}