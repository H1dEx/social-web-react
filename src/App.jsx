import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";

const App = props => {
    return (
        <div>
            <HeaderContainer/>
            <Main/>
        </div>
    );
}

const MainApp = props => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>)
}

export default MainApp;