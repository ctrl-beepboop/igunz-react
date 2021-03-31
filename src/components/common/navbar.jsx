import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <React.Fragment>
            <div className="navigation-primary">
                <div className="navigation-holder">
                    <div className="ig-logo"></div>
                    <div className="ig-search"></div>
                    <div className="ig-login"></div>
                </div>
            </div>

            <div className="navigation-secondary">
                <div className="navigation-holder">
                    <React.Fragment>
                        <li>
                            <NavLink to={"/home"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                        </li>
                    </React.Fragment>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
