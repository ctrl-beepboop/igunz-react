import React, { Component } from "react";
import Joi from "joi";

import InputField from "./form/InputField";

class Form extends Component {
    state = { data: {}, errors: {} };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Mount");
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = this.schema.validate(obj);

        return error ? error.details[0].message : null;
    };

    //TODO: DELETE ERRORS WHEN EXISTING ERRORS BEING HANDLED
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const data = { ...this.state.data };
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

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

        if (!error) return;

        const errors = {};

        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });

        if (errors) return;
        this.submit();
    };

    renderInput(name, label) {
        const { data, errors } = this.state;
        return (
            <InputField
                name={name}
                label={label}
                errors={errors[name]}
                onChange={this.handleChange}
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
