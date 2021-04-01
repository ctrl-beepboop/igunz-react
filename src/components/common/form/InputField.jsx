import React from "react";

const InputField = ({ name }) => {
    return (
        <div className={"input-field_" + name}>
            <input type="text" name={name} id={"id_" + name} />
        </div>
    );
};

export default InputField;
