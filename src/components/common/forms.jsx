import React, { Component } from "react";
import Joi from "joi-browser";

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
        this.setState({ username: input.value });
    };

    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema);
        console.log(this.state.data);
        console.log(error);
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
