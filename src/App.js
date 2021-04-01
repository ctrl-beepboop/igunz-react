import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Home from "./components/pages/Home";
import NavBar from "./components/common/navbar";
import Shop from "./components/pages/Shop";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
    return (
        <React.Fragment>
            <NavBar />

            <Switch>
                <Route path={"/home"} component={Home} />
                <Route path={"/shop"} component={Shop} />
                <Route path={"/login"} component={Login} />
                <Route path={"/create-account"} component={Register} />

                <Redirect exact from={"/"} to={"/home"} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
