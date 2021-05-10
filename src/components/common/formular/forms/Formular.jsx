import React, { useEffect, useState } from "react";
import Joi from "joi";
import SubmitButton from "../widgets/SubmitButton";

const Formular = (props) => {
    const [value, setValue] = useState(props.formularObject);
    const [inputError, setError] = useState(props.formularObject);
    const [buttonState, setButtonState] = useState("inactive");

    const handleFormularChange = (e) => {
        e.preventDefault();

        const inputName = e.target.name;
        const inputValue = e.target.value;

        const dataToValidate = { [inputName]: inputValue };

        props.children.map((child) => {
            let refField = "";

            if (child.props["name"] === inputName && child.props["valueRef"] !== undefined) {
                refField = child.props["valueRef"];
                dataToValidate[refField] = value[refField];
            }
        });

        const { error } = props.schema.validate(dataToValidate);

        let errorMessage = "";

        if (error) {
            errorMessage = error.details[0].message;
        }

        setError({ ...inputError, [inputName]: errorMessage });
        setValue({ ...value, [inputName]: inputValue });
    };

    const handleFormularSubmit = (e) => {
        e.preventDefault();
        /**
         * API Request Todo
         */
    };

    useEffect(() => {
        const initialError = props.schema.validate(value);

        if (!initialError.error && buttonState === "inactive") {
            setButtonState("active");
        }

        if (initialError.error && buttonState === "active") {
            setButtonState("inactive");
        }
    }, [value, inputError]);

    return (
        <form method={props.method} onChange={handleFormularChange} onSubmit={handleFormularSubmit}>
            {props.children.map((child) => {
                return React.cloneElement(child, { inputError: inputError });
            })}

            <SubmitButton label={props.label} buttonState={buttonState} />
        </form>
    );
};

export default Formular;
