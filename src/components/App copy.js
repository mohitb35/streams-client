import React from 'react';
// import { HashRouter, Route, Link } from 'react-router-dom'; 
import { MemoryRouter, Route, Link } from 'react-router-dom'; 

const Page1 = () => {
	return (
		<div>
			Page1
			<Link to="/page2">Navigate to page 2</Link>
		</div>
		
	)
};

const Page2 = () => {
	return (
		<div>
			Page2
			<Link to="/">Navigate to page 1</Link>
		</div>

	)
};

const App = () => {
	return (
		<div>
			{/* <HashRouter>
				<Route path="/" exact component={Page1} />
				<Route path="/page2" component={Page2} />
			</HashRouter> */}
			<MemoryRouter>
				<Route path="/" exact component={Page1} />
				<Route path="/page2" component={Page2} />
			</MemoryRouter>
		</div>
	)
}

export default App;