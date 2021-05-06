import React, { useEffect, useState } from "react";
import Joi from "joi";

const RegisterForm = () => {
    const schema = Joi.object({
        username: Joi.string().min(5),
        email: Joi.string().min(7),
        password: Joi.string().min(5),
        repassword: Joi.valid(Joi.ref("password")),
    });

    const [value, setValue] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });

    const [previousInput, setPreviousInput] = useState("");

    const [error, setError] = useState({
        usernameError: "",
        emailError: "",
        passwordError: "",
        repasswordError: "",
    });

    useEffect(() => {
        const errorInput = previousInput + "Error";

        const { error } = schema.validate({ [previousInput]: value[previousInput] });
        const errorMessage = error ? error.details[0].message : "";

        setError({ ...error, [errorInput]: errorMessage });
    }, [value, previousInput]);

    const handleFormularChange = (e) => {
        e.preventDefault();

        const inputName = e.target.name;
        const inputValue = e.target.value;

        setPreviousInput(inputName);
        setValue({ ...value, [inputName]: inputValue });
    };

    return (
        <>
            <form method='post' id='test' onChange={handleFormularChange}></form>
        </>
    );
};

export default RegisterForm;
