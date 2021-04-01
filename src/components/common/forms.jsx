import React, { Component } from "react";
import InputField from "./form/InputField";

import { Textbox } from "react-inputs-validation";
import SubmitButton from "./form/SubmitButton";

class Form extends Component {
    state = { data: {} };

    handleChange = ({ currentTarget: input }) => {
        this.state.data[input.name] = input.value;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    };

    renderInput(name) {
        return <InputField name={name} onChange={this.handleChange} />;
    }

    renderSubmitButton(name) {
        return (
            <button type="submit" name={name}>
                Senden
            </button>
        );
    }
}

export default Form;
