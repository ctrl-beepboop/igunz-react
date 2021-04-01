import React from "react";

const InputField = ({ name, ...rest }) => {
    return (
        <div className={"input-field_" + name}>
            <input type="text" name={name} id={"id_" + name} {...rest} />
        </div>
    );
};

export default InputField;
