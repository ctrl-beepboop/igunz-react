import React, { useEffect, useState } from "react";
import Form from "../../../common/forms";
import Joi from "joi";

import userService from "../../../../services/userService";

const RegisterForm = () => {
    const schema = Joi.object({
        username: Joi.string().min(5),
        email: Joi.string().min(7),
        password: Joi.string().min(5),
        repassword: Joi.valid(Joi.ref("password")),
    });

    const handleFormularChange = (e) => {
        e.preventDefault();

        const inputName = e.target.name;
        const inputValue = e.target.value;

        const errorMsgSelector = document.querySelector(
            'label[for="' + inputName + '"] .errorMessage'
        );

        const error = {};
        const value = { [inputName]: inputValue };

        if (inputName === "repassword") {
            const passwordValue = document.querySelector("label[for=password] input").value;
            value["password"] = passwordValue;
        }

        error[inputName] = schema.validate(value);
        errorMsgSelector.innerHTML = error[inputName].error;
    };

    return (
        <React.Fragment>
            <form method='post' onChange={handleFormularChange}>
                <label htmlFor='username'>
                    <p>Username</p>
                    <input type='text' name='username' />
                    <p className='errorMessage'></p>
                </label>
                <br />
                <br />
                <label htmlFor='email'>
                    <p>E-Mail</p>
                    <input type='text' name='email' />
                    <p className='errorMessage'></p>
                </label>
                <br />
                <br />
                <label htmlFor='password'>
                    <p>Password</p>
                    <input type='text' name='password' key='password' />
                    <p className='errorMessage'></p>
                </label>
                <br />
                <br />
                <label htmlFor='repassword'>
                    <p>Re-Password</p>
                    <input type='text' name='repassword' />
                    <p className='errorMessage'></p>
                </label>

                <input type='submit' />
            </form>
        </React.Fragment>
    );
};

export default RegisterForm;
