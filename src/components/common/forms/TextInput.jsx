import React from "react";

const TextInput = (props) => {
    return (
        <>
            <div className={"input-" + props.name}>
                <label htmlFor={props.name}>{props.label}</label>
                <br />
                <input type='text' name={props.name} placeholder={props.name + "..."} />
                <p className='errorMessage'>{props.inputError[props.name]}</p>
            </div>
            <br />
        </>
    );
};

export default TextInput;
