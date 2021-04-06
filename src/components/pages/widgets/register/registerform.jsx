import React from "react";
import Form from "../../../common/forms";

import Joi from "joi";

class RegisterForm extends Form {
    state = {
        data: { username: "", email: "", password: "", repassword: "" },
        errors: {},
    };

    schema = Joi.object({
        username: Joi.string().min(5).required().messages({
            "string.empty": "Field Username is required!",
            "string.min": "Your username must have atleast 5 characters!",
        }),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),
        password: Joi.string().min(5).required().messages({
            "string.empty": "Field Password is required!",
            "string.min": "Your Password must have atleast 5 characters!",
        }),
        repassword: Joi.ref("password"),
    });

    submit = () => {
        console.log("gut ja");
    };

    render() {
        return (
            <React.Fragment>
                <form
                    onSubmit={this.handleSubmit}
                    className="register-formular"
                >
                    {this.renderInput("username", "Username")} <br />
                    {this.renderInput("email", "E-Mail Adress")} <br />
                    {this.renderInput("password", "Password")} <br />
                    {this.renderInput("repassword", "Re-Password")} <br />
                    {this.renderSubmitButton("submitRegister")} <br />
                </form>
            </React.Fragment>
        );
    }
}

export default RegisterForm;
