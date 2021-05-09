import React, { useState } from "react";
import Joi from "joi";

const Formular = (props) => {
    const [value, setValue] = useState(props.formularObject);
    const [inputError, setError] = useState(props.formularObject);

    const handleFormularChange = (e) => {
        e.preventDefault();

        const inputName = e.target.name;
        const inputValue = e.target.value;

        const { error } = props.schema.validate({ [inputName]: inputValue });

        let errorMessage = "";

        if (error) {
            errorMessage = error.details[0].message;
        }

        setError({ ...inputError, [inputName]: errorMessage });
        setValue({ ...value, [inputName]: inputValue });
    };

    return (
        <form method={props.method} onChange={handleFormularChange}>
            {props.children.map((child) => {
                return React.cloneElement(child, { inputError: inputError });
            })}
        </form>
    );
};

export default Formular;
