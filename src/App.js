import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';

const App = (props) => {
    return (
    	<div>
            <HeaderContainer/>
            <Main/>
        </div>
    );
}

export default App;