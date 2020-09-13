import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer.ts";

class HeaderContainer extends React.Component {


    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer)