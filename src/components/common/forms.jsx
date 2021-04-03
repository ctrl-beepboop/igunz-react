import React, { Component } from "react";
import Joi from "joi";

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

    //TODO: DELETE ERRORS WHEN EXISTING ERRORS BEING HANDLED
    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data });
    };

    /**
     *
     * validates with a Joi Schema
     * returns a object with field error messages
     *
     * @returns object
     */
    validate = () => {
        const { error } = this.schema.validate(this.state.data, {
            abortEarly: false,
        });

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors });

        if (errors) return;
    };

    renderInput(name) {
        return (
            <InputField
                name={name}
                onChange={this.handleChange}
                errors={this.state.errors[name]}
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
