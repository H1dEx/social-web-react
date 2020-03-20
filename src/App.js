import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
    
return ( <div>
	<Header />
	<Main state={props.state} addPost={props.addPost} sendMessage={props.sendMessage} updatePostValue={props.updatePostValue} updateMessageValue={props.updateMessageValue} />
</div>

);
}

export default App;