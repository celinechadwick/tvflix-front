import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";


const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});




//Application assets

import "./assets/css/bootstrap.css";

import Landing from "./components/Landing";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import User from "./components/User";
import AllShows from "./components/AllShows";
import ShowInfo from "./components/ShowInfo";
import EditUser from "./components/EditUser";


const restrict = () => {
    if (!window.localStorage.getItem("token")) {
        browserHistory.push("/login");
    }
}


ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={Landing} />
        <Route path="/users/login" component={Login} />
        <Route path ="/users/new" component={NewUser} />
        <Route path="/users/:id" component={User} onEnter={restrict} />
        <Route path="/shows" component={AllShows} onEnter={restrict} />
        <Route path="/shows/:tvmaze_id" component={ShowInfo} onEnter={restrict} />
        <Route path="/users/:id/edit" component={EditUser} onEnter={restrict} />
    </Router>
, document.getElementById("app"));


app.listen(process.env.PORT || 3000);
