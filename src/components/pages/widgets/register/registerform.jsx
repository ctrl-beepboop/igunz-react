import React from "react";
import Form from "../../../common/forms";

class RegisterForm extends Form {
    state = { dara: { username: "", password: "" }, errors: {} };

    submit = () => {};

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username")}
                    {this.renderSubmitButton("submitRegister")}
                </form>
            </React.Fragment>
        );
    }
}

export default RegisterForm;
