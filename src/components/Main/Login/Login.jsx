import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../../helpers/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../../common/FormControls/FormControls.module.css";
import s from "./Login.module.css";


const Login = (props) => {
    const onSubmit = (data) => {
        props.login({...data})
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <h1 className={s.h1}>LOGIN</h1>
            <div className={style.login_block}>
                <span className={style.input_span}>Email</span>
                <Field component={Input} name="email" validate={[required]} className={style.input}/>
            </div>
            <div className={style.password_block}>
                <span className={style.input_span}>Password</span>
                <Field className={style.input} type="password" component={Input} name="password" validate={[required]}/>
            </div>
            <div className={style.check_block}><Field type="checkbox" className={style.checkbox} component={Input}
                                                      name="rememberMe"/> Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div className={style.button_block}>
                <button className={style.loginSubmit}>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)