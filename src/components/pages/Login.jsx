import React from "react";
import { useHistory } from "react-router-dom";

import LoginForm from "./widgets/login/loginform";

const Login = () => {
    let history = useHistory();

    let back = (e) => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <React.Fragment>
            <div className="modal-layer">
                <div class="modal-box">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>LogIn in your iGunz Account!</h2>
                            <hr />
                        </div>
                        <div className="modal-body">
                            <LoginForm />
                        </div>
                        <div className="modal-footer">
                            <button onClick={back}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
