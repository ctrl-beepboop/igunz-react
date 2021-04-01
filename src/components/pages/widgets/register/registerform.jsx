import React from "react";
import Form from "../../../common/forms";

const RegisterForm = () => {
    const form = new Form();

    form.state = { data: { username: "", password: "" }, errors: {} };

    return (
        <React.Fragment>
            <form onSubmit={form.handleSubmit}>
                {form.renderInput("username")}
                {form.renderInput("password")}
                {form.renderSubmitButton("submitRegister")}
                {console.log(form.state)}
            </form>
        </React.Fragment>
    );
};

export default RegisterForm;
