import React, { Component } from "react";
import InputField from "./form/InputField";

class Form extends Component {
    handleChange = ({ currentTarget: input }) => {
        const errors = "";
    };

    renderInput(name) {
        return <InputField name={name} onChange={this.handleChange} />;
    }
}

export default Form;
