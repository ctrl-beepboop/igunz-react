import React from "react";
import Form from "../../../common/forms";

import Joi from "joi";

class RegisterForm extends Form {
    state = { data: { username: "", password: "" }, errors: {} };

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

    submit = () => {};

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username")}
                    {this.renderInput("password")}
                    {this.renderSubmitButton("submitRegister")}
                </form>
            </React.Fragment>
        );
    }
}

export default RegisterForm;
