import React, { useState } from "react";
import Form from "../../../common/forms";
import Joi from "joi";

import userService from "../../../../services/userService";

const RegisterForm = () => {
    const [username, setUsername] = useState(0);
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const [repassword, setRepassword] = useState(0);

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

        console.log(schema.validate({ username }));
    };

    const handleFormularChange = (e) => {
        e.preventDefault();

        const formularName = e.target.name;
        const formularValue = e.target.value;

        switch (formularName) {
            case "username":
                setUsername(formularValue);
                break;

            case "email":
                setEmail(formularValue);
                break;

            case "password":
                setPassword(formularValue);
                break;

            case "repassword":
                setRepassword(formularValue);
                break;
        }
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
