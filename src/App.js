import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import "./App.scss";

import Home from "./components/pages/Home";
import NavBar from "./components/common/navbar";
import Shop from "./components/pages/Shop";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <React.Fragment>
            <NavBar />

            <Switch location={background || location}>
                <Route path={"/home"} exact component={Home} />
                <Route path={"/shop"} exact component={Shop} />
                <Route path={"/create-account"} exact component={Register} />

                <Route path={"/login"} component={Home} />

                <Redirect exact from={"/"} to={"/home"} />
            </Switch>

            {background && <Route path='/login' children={<Login />} />}
        </React.Fragment>
    );
}

export default App;
