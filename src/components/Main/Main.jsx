import React from 'react';
import {Route} from 'react-router-dom';
import styles from './Main.module.css';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import News from './News/News';
import Settings from './Settings/Settings';
import Music from './Music/Music';
import DialogsContainer from "./Dialogs/DialogsContainer";
import Users from "./Users/UsersContainer";

const Main = (props) => {
    return (
        <section className="container">
            <div className={styles.wrapper}>
                <Navbar/>
                <div className={styles.content}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                    <Route path="/users" render={Users}/>
                </div>

            </div>
        </section>
    );
}

export default Main