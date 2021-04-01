import React from "react";

const SubmitButton = ({ name, ...rest }) => {
    return (
        <div className={"submit-field_" + name}>
            <input type="submit" name={name} id={"id_" + name} {...rest} />
        </div>
    );
};

export default SubmitButton;
