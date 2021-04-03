import React, { Component } from "react";
import InputField from "./form/InputField";

import SubmitButton from "./form/SubmitButton";

class Form extends Component {
    state = { data: {}, errors: {} };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Mount");
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ username: input.value });
    };

    validate = () => {
        return "OHNO";
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const error = this.validate();

        this.setState({ errors: error || {} });

        //if (error) return;
        this.submit();
    };

    renderInput(name) {
        return (
            <InputField
                name={name}
                onChange={this.handleChange}
                errors={this.state.errors}
            />
        );
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
