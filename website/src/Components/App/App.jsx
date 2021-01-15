import React from "react"
import * as C from "../../Components"
import { Route, Switch } from "react-router-dom"

export const App = () => {
    return (
        <>
            <C.Header />
            <Switch>
                <Route exact path="/">
                    <C.Home />
                </Route>
                <Route path="/home">
                    <C.Home />
                </Route>
                <Route path="/program/calendar">
                    <C.Calendar />
                </Route>
                <Route path="/program/sixth-graders">
                    <C.SixthGraders />
                </Route>
                <Route path="/program/curriculum">
                    <C.Curriculum />
                </Route>
                <Route path="/about-lmc/people">
                    <C.People />
                </Route>
                <Route path="/about-lmc/mission-statement">
                    <C.MissionStatement />
                </Route>
                <Route path="/contact">
                    <C.Contact />
                </Route>
                <Route path="/others/gallery">
                    <C.Gallery />
                </Route>
                <Route path="/others/archive">
                    <C.Archive />
                </Route>
                <Route path="/others/faq">
                    <C.FAQ />
                </Route>
                <Route path="*">
                    <C.DeadLanding />
                </Route>
            </Switch>
            <C.Footer />
        </>
    )
}