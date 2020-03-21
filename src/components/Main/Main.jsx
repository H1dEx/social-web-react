import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import styles from './Main.module.css';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Settings from './Settings/Settings';
import Music from './Music/Music';

const Main = (props) => {
return (
<section className="container">
    <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.content}>
            <Route path="/dialogs" render={() => <Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} />
            <Route path="/profile" render={()=> <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/news" render={News} />
            <Route path="/music" render={Music} />
            <Route path="/settings" render={Settings} />
        </div>

    </div>
</section>
)
}

export default Main