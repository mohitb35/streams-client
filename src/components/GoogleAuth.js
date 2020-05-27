import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
/* 	state = {
		isSignedIn: null
	};
 */
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: process.env.REACT_APP_CLIENT_ID,
				scope: 'email'
			}).then(() => {
				//Get auth object, and set state with isSignedIn
				this.auth = window.gapi.auth2.getAuthInstance();
				/* this.setState({
					isSignedIn: this.auth.isSignedIn.get()
				}); */
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			})
		});
	};

	/* onAuthChange = (isSignedIn) => {
		this.setState({
			isSignedIn: isSignedIn
		})
	}; */

	// Refactor to call action creator on Auth change instead of changing the state directly
	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	}

	onSignInClick = () => {
		this.auth.signIn();
	}

	onSignOutClick = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		// Check is user is signed in (based on state)
		if (this.props.isSignedIn === null){
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return(
				<button className="ui red google button" onClick={this.onSignInClick}>
					<i className="google icon" />
					Sign In With Google
				</button>
			);
		}
	}

	render() {
		return (
			<div>{this.renderAuthButton()}</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn,
		userId: state.auth.userId
	}
}

export default connect(
	mapStateToProps,
	{ signIn, signOut }
)(GoogleAuth);