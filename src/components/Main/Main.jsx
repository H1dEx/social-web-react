import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import styles from './Main.module.css';
import Navbar from './Navbar/Navbar';
import ProfileContainer from './Profile/ProfileContainer';
import News from './News/News';
import Settings from './Settings/Settings';
import Music from './Music/Music';
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer.ts";
import Preloader from "../common/Preloader/Preloader";

class Main extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <section className="container">
                <div className={styles.wrapper}>
                    <Navbar/>
                    <div className={styles.content}>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/news" render={News}/>
                        <Route path="/music" render={Music}/>
                        <Route path="/settings" render={Settings}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,

})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(Main);
