import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

//Application assets
// import "./assets/css/style.css";
// import "./assets/css/bootstrap.css";

import Landing from "./components/Landing";
import Login from "./components/Login";
import NewUser from "./components/NewUser"
import User from "./components/User";
import AllShows from "./components/AllShows";
import ShowInfo from "./components/ShowInfo";

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={Landing} />
        <Route path="/users/login" component={Login} />
        <Route path ="/users/new" component={NewUser} />
        <Route path="/users/:id" component={User} />
        <Route path="/shows" component={AllShows} />
        <Route path="/shows/:tvmaze_id/" component={ShowInfo} />
    </Router>
, document.getElementById("app"));
