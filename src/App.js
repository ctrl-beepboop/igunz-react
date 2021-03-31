import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Home from "./components/pages/Home";
import NavBar from "./components/common/navbar";
import Shop from "./components/pages/Shop";

function App() {
    return (
        <React.Fragment>
            <NavBar />

            <Switch>
                <Route path={"/home"} component={Home} />
                <Route path={"/shop"} component={Shop} />

                <Redirect exact from={"/"} to={"/home"} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
