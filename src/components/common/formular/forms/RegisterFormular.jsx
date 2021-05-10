import Formular from "./Formular";
import Joi from "joi";
import TextInput from "../widgets/TextInput";

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
        <Formular formularObject={formularObject} schema={schema} method='post'>
            <TextInput name='password' label='Password' />
            <TextInput name='repassword' label='Revalidate Password' valueRef='password' />
        </Formular>
    );
};

export default RegisterFormular;
