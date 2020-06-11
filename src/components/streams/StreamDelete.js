import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, deleteStream } from '../../actions';

import Modal from '../Modal';
import history from '../../history';



class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onClickDelete = () => {
		this.props.deleteStream(this.props.stream.id);
	}

	renderActions() {
		return (
			<React.Fragment>
				<button className="ui button" onClick={() => history.push('/')}>Cancel</button>
				<button className="ui button negative" onClick={this.onClickDelete}>Delete</button>
			</React.Fragment>

			// Using a <div> tag as below, the modal css gets affected, but we can't just send the buttons back as they must be wrapped within some tags
			// Alternative - use React.Fragment
			/* const actions = (
				<div>
					<button className="ui button" onClick={()=>{history.push('/')}}>Cancel</button>
					<button className="ui button negative">Delete</button>
				</div>
			); */
		);
	}

	renderContent() {
		if(!this.props.stream){
			return 'Are you sure you want to delete this stream?'
		}

		return `Are you sure you want to delete stream: ${this.props.stream.title} ?`
	}

	render() {
		return (
			<Modal 
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={()=>{history.push('/')}}
			/>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
}

export default connect(
	mapStateToProps,
	{
		fetchStream,
		deleteStream
	}
)(StreamDelete);