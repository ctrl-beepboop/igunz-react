import Formular from "./Formular";
import Joi from "joi";
import TextInput from "../widgets/TextInput";
import SubmitButton from "../widgets/SubmitButton";

const RegisterFormular = () => {
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
        <Formular formularObject={formularObject} schema={schema} label='Register' method='post'>
            <TextInput name='username' label='Username' />
            <TextInput name='email' label='E-Mail Adress' />
            <TextInput name='password' label='Password' type='password' />
            <TextInput
                name='repassword'
                label='Revalidate Password'
                type='password'
                valueRef='password'
            />
        </Formular>
    );
};

export default RegisterFormular;
