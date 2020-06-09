import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	}

	render() {
		// props are made available by wrapping the component in reduxForm
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit}/>
			</div>
		)
	}
}

export default connect(
	null,
	{
		createStream
	}
)(StreamCreate);