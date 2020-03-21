import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
return ( <div>
	<Header />
	<Main state={props.state} dispatch={props.dispatch} />
</div>

);
}

export default App;