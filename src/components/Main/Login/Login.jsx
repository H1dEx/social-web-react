import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../../helpers/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";

const Login = (props) => {
    const onSubmit = (data)=>{
        props.login({...data})
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
                    <Field placeholder="login" component={Input} name="email" validate={[required]}/>
                </div>
                <div>
                    <Field placeholder="password" component={Input} name="password" validate={[required]}/>
                </div>
                <div>Remember me<Field type="checkbox" component={Input} name="rememberMe"/></div>
                <div>
                    <button>Submit</button></div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default connect(null, {login})(Login)