import React from "react"
import {
    Header,
    Home,
    DeadLanding,
    Contact,
    AboutUs,
    Calendar,
    Footer,
    Curriculum
} from "../../Components"
import { Route, Switch } from "react-router-dom"

export const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/curriculum">
                    <Curriculum />
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
            <Footer />
        </>
    )
}