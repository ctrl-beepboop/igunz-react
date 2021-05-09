import Joi from "joi";
import Formular from "../../../common/forms/Formular";
import TextInput from "../../../common/forms/TextInput";

const RegisterForm = () => {
    const schema = Joi.object({
        username: Joi.string().min(5),
        email: Joi.string().min(7),
        password: Joi.string().min(5),
        repassword: Joi.valid(Joi.ref("password")),
    });

    const formularObject = {
        username: "",
        email: "",
        password: "",
        repassword: "",
    };

    return (
        <>
            <Formular method='post' schema={schema} formularObject={formularObject}>
                <TextInput name='username' label='Username' />
                <TextInput name='email' label='Email' />
                <TextInput name='password' label='Password' />
                <TextInput name='repassword' label='Re-Password' />
            </Formular>
        </>
    );
};

export default RegisterForm;
