import React from "react";
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../../api/api";
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../../helpers/validators/validators";

const Login = (props) => {
    const onSubmit = (data)=>{
        authAPI.login(data)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="login" component={Input} name="login" validate={[required]}/>
                </div>
                <div>
                    <Field placeholder="password" component={Input} name="password" validate={[required]}/>
                </div>
                <div><Field type="checkbox" component={Input} name="rememberMe" validate={[required]}/>Remember me</div>
                <div>
                    <button>Submit</button></div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login