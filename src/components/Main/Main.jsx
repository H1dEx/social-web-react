import React, { Suspense } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './Main.module.css';
import Navbar from './Navbar/Navbar';
import News from './News/News';
import Settings from './Settings/Settings';
import Music from './Music/Music';
import Login from './Login/Login';
import { initializeApp } from '../../redux/appReducer';
import Preloader from '../common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));

class Main extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <section className="container">
        <div className={styles.wrapper}>
          <Navbar />
          <div className={styles.content}>
            <Suspense fallback={Preloader}>
              <Switch>
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/news" render={News} />
                <Route path="/music" render={Music} />
                <Route path="/settings" render={Settings} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <Login />} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(Main);
