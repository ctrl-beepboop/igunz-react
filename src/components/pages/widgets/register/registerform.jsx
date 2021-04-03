import React from "react";
import Form from "../../../common/forms";

import Joi from "joi-browser";

class RegisterForm extends Form {
    state = { data: { username: "", password: "" }, errors: {} };

    schema = {
        username: Joi.string().min(5).required(),
        password: Joi.string().min(5).required(),
    };

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
