import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authorize} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.authorize();
    }

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

export default connect(mapStateToProps, {authorize})(HeaderContainer)