import React from "react";

const InputField = ({ name, label, errors, ...rest }) => {
    return (
        <div className={"input-field_" + name}>
            <label htmlFor={name} className="input-title">
                {label}
            </label>
            <br />
            <input type="text" name={name} id={"id_" + name} {...rest} /> <br />
            <span className="helper-text input-error">{errors}</span>
        </div>
    );
};

export default InputField;
