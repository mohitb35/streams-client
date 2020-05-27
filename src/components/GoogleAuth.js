import React from 'react';

class GoogleAuth extends React.Component {
	state = {
		isSignedIn: null
	};

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: process.env.REACT_APP_CLIENT_ID,
				scope: 'email'
			}).then(() => {
				//Get auth object, and set state with isSignedIn
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({
					isSignedIn: this.auth.isSignedIn.get()
				});
				this.auth.isSignedIn.listen(this.onAuthChange);
			})
		});
	};

	onAuthChange = (isSignedIn) => {
		this.setState({
			isSignedIn: isSignedIn
		})
	};

	onSignInClick = () => {
		this.auth.signIn();
	}

	onSignOutClick = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		// Check is user is signed in (based on state)
		if (this.state.isSignedIn === null){
			return null;
		} else if (this.state.isSignedIn) {
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

export default GoogleAuth;