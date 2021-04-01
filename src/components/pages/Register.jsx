import React, { Component } from "react";
import Form from "../common/forms";

const Register = () => {
    const form = new Form();

    return (
        <React.Fragment>
            <div className="cstm-container">
                <div className="main-box register-box">
                    <h2>
                        Be part of iGunz! Create your account complete free!
                        <form onSubmit={true}>
                            {form.renderInput("username")}
                        </form>
                    </h2>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;
