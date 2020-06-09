import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/chatroom.js";
import App from "./App";


function Routesite() {

    return (

        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/chatroom" component={Chat} />
            </Switch>
        </Router>
    )
}
export default Routesite;