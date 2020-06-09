import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';


class StreamList extends React.Component {

	componentDidMount() {
		this.props.fetchStreams();
	}
	
	renderAdmin(stream) {
		if(stream.userId === this.props.currentUserId){
			return (
				<div className="right floated content">
					<Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
					<button className="ui button negative">Delete</button>
				</div>
			);
		}
	}

	renderStreamList() {
		return this.props.streams.map(stream => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					{/* calling renderAdmin at the top in order for semantic UI to show at the right */}
					<i className="large middle aligned icon camera"/>
					<div className="content">
						{stream.title}
						<div className="description">
							{stream.description}
						</div>
					</div>
				</div>
			)
		})
	}

	renderCreate() {
		if(this.props.isSignedIn){
			return(
				<Link to="/streams/new" className="ui right floated button primary">Create Stream</Link>
			)
		}
	}

	render() {
		return (
			<div>
				{this.renderCreate()}
				<h2>Streams</h2>
				<div className="ui celled list">
					{this.renderStreamList()}
				</div>

			</div>
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		currentUserId: state.auth.userId,
		streams: Object.values(state.streams),
		isSignedIn: state.auth.isSignedIn
	}
};

export default connect(
	mapStateToProps,
	{ fetchStreams }
)(StreamList);