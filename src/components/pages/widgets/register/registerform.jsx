import React, { useState } from "react";
import Form from "../../../common/forms";
import Joi from "joi";

import userService from "../../../../services/userService";

const RegisterForm = () => {
    const [values, setValue] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });

    const schema = Joi.object({
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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    };

    const handleFormularChange = (e) => {
        e.preventDefault();

        const inputName = e.target.name;
        const inputValue = e.target.value;

        setValue({ ...values, [inputName]: inputValue });
    };

    return (
        <React.Fragment>
            <form
                method="post"
                onSubmit={handleSubmit}
                onChange={handleFormularChange}
            >
                <label htmlFor="username">
                    <p>Username</p>
                    <input type="text" name="username" />
                </label>
                <br />
                <br />
                <label htmlFor="email">
                    <p>E-Mail</p>
                    <input type="text" name="email" />
                </label>
                <br />
                <br />
                <label htmlFor="password">
                    <p>Password</p>
                    <input type="text" name="password" />
                </label>
                <br />
                <br />
                <label htmlFor="repassword">
                    <p>Re-Password</p>
                    <input type="text" name="repassword" />
                </label>

                <input type="submit" />
            </form>
        </React.Fragment>
    );
};

export default RegisterForm;
