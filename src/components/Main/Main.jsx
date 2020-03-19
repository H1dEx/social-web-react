import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import styles from './Main.module.css';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Settings from './Settings/Settings';
import Music from './Music/Music';

const Main = () => {
return ( <BrowserRouter>
<section className="container">
    <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.content}>
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </div>

    </div>
</section></BrowserRouter>
)
}

export default Main