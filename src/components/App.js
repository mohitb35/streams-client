import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'; 
import { Router, Route } from 'react-router-dom'; 

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

import Header from './Header';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<Header />
				<Route path="/" exact component={StreamList}/>
				<Route path="/streams/show" exact component={StreamShow}/>
				<Route path="/streams/new" exact component={StreamCreate}/>
				<Route path="/streams/edit/:id" exact component={StreamEdit}/>
			</Router>
		</div>
	)
}

export default App;