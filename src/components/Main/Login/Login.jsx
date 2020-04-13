import React from "react";
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../../api/api";

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
                    <Field placeholder="login" component="input" name="login"/>
                </div>
                <div>
                    <Field type="password" placeholder="password" component="input" name="password"/>
                </div>
                <div><Field type="checkbox" component="input" name="rememberMe"/>Remember me</div>
                <div>
                    <button>Submit</button></div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login