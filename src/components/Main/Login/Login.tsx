import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormControls/FormControls";
import {required} from "../../../helpers/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../../common/FormControls/FormControls.module.css";
import s from "./Login.module.css";
import {AppStateType} from "../../../redux/reduxStore";

type MapStateToPropsType = {
    captchaURL: string | null
    isAuth: boolean | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: null | string) => void
}

type LoginFormsValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormOwnProps = {
    captchaURL: string
}

const Login: React.FC<MapStateToPropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (data: LoginFormsValuesType) => {
        props.login(data.email, data.password, data.rememberMe, data.captcha);
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    )
}
const LoginForm: React.FC<InjectedFormProps<LoginFormsValuesType> & LoginFormOwnProps> = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <h1 className={s.h1}>LOGIN</h1>
            <div className={style.login_block}>
                <span className={style.input_span}>Email</span>
                {createField("email", [required], Input, style.input, {})}
                {/*<Field component={Input} name="email" validate={[required]} className={style.input}/>*/}
            </div>
            <div className={style.password_block}>
                <span className={style.input_span}>Password</span>
                {createField("password", [required], Input, style.input, {type: "password"})}
                {/*<Field className={style.input} type="password" component={Input} name="password" validate={[required]}/>*/}
            </div>
            <div className={style.check_block}>
                <Field type="checkbox"
                       className={style.checkbox}
                       component={Input}
                       name="rememberMe"
                />
                Remember me
            </div>

            {captchaURL && <img src={captchaURL} alt="captcha"/>}
            {captchaURL && createField("captcha", [required], Input, style.input, {})}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div className={style.button_block}>
                <button className={style.loginSubmit}>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        captchaURL: state.auth.captchaURL,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)