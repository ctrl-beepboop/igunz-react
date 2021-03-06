import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavBar = () => {
    let location = useLocation();

    return (
        <React.Fragment>
            <div className="navigation-primary">
                <div className="navigation-holder">
                    <div className="ig-logo">
                        <img
                            className="ig-logo"
                            src="/assets/logo.png"
                            alt="Logo"
                        />
                    </div>
                    <div className="ig-search">
                        {/* OWN COMPONENT */}
                        <input type="text" placeholder="Search player stats" />
                        <img
                            className="searchBtn"
                            src="/assets/search.svg"
                            alt="Searchlogo"
                        />
                    </div>
                    <div className="ig-login">
                        Start playing
                        <img
                            className="ig-login-sym"
                            src="/assets/login.svg"
                            alt="Login Button"
                        />
                    </div>
                </div>
            </div>
            <div className="navigation-secondary">
                <div className="navigation-holder">
                    <div className="menu-items">
                        <React.Fragment>
                            <NavLink to={"/home"}>Home</NavLink>
                            <Link
                                to={{
                                    pathname: "/login",
                                    state: { background: location },
                                }}
                            >
                                Login
                            </Link>
                            <NavLink to={"/create-account"}>
                                Create Account
                            </NavLink>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
