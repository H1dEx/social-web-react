import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
return ( <div>
	<Header />
	<div className="container">
		<div className="content_wrapper">
			<Navbar />
			<Profile />
		</div>
	</div>
</div>

);
}

export default App;