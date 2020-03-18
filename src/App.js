import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

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