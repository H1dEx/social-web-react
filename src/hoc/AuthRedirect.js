import React from "react";
import {Redirect} from "react-router-dom";

export const AuthRedirect = (Component) => {
    return class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return (
                <Component {...this.props}/>
            )
        }
    }
}