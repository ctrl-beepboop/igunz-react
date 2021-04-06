import React from "react";
import { Link } from "react-router-dom";
import NewsWidget from "./widgets/home/news";

const Home = () => {
    return (
        <React.Fragment>
            <div className="welcome">
                <img
                    className="welcome-logo"
                    src="assets/logo.png"
                    alt="Logo"
                />

                <p>
                    Sign-up today and start playing GunZ: The Duel with other
                    players just like you.
                    <br />
                    iGunZ is completely Free to play!
                </p>
                <Link to="/create-account">
                    <div className="new-account">Create Account</div>
                </Link>
            </div>

            <NewsWidget />
        </React.Fragment>
    );
};

export default Home;
