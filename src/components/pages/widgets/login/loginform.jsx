import React from "react";
import Form from "../../../common/forms";

import Joi from "joi";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };

    schema = Joi.object({
        username: Joi.string().min(5).required().messages({
            "string.empty": "Field Username is required!",
            "string.min": "Your username must have atleast 5 characters!",
        }),
        password: Joi.string().min(5).required().messages({
            "string.empty": "Field Password is required!",
            "string.min": "Your Password must have atleast 5 characters!",
        }),
    });

    submit = () => {
        console.log("gut ja");
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="login-formular">
                    {this.renderInput("username", "Username")} <br />
                    {this.renderInput("password", "Password")} <br />
                    {this.renderSubmitButton("submitLogin")} <br />
                </form>
            </React.Fragment>
        );
    }
}

export default LoginForm;
