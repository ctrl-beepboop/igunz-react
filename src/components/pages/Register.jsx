import React, { Component } from "react";
import RegisterForm from "./widgets/register/registerform";

const Register = () => {
    return (
        <React.Fragment>
            <div className="cstm-container">
                <div className="main-box register-box">
                    <h2>
                        Be part of iGunz! Create your account complete free!
                        <RegisterForm />
                    </h2>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;
