// StreamForm was created by using the code from the previous commit's StreamCreate, and refactoring to make it general

import React from 'react';
import { Field, reduxForm } from 'redux-form';
// Field = react component, reduxForm = function

/* import { connect } from 'react-redux';
import { createStream } from '../../actions'; */

class StreamForm extends React.Component {

	renderError({ touched, error }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			)
		}
	}

	renderInput = (/*formProps*/{ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`
		// props sent to component within field
		/* return (
			<input 
				type="text" 
				onChange={formProps.input.onChange} 
				value={formProps.input.value}	
			/>
		) */
		return (
			<div className={className}>
				<label>{label}</label>
				<input 
					type="text" 
					{ ...input }
					//Shortform representation to include onChange and Value. 
					// You can also destructure input from formProps in the function params, or use ...formProps.input
					autoComplete="off"
				/>
				{this.renderError(meta)}
			</div>
		);
	}

	onSubmit = (formValues) => {
		// this.props.createStream(formValues);
		this.props.onSubmit(formValues);
	}

	render() {
		// props are made available by wrapping the component in reduxForm
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderInput} label="Enter title"/>
				<Field name="description" component={this.renderInput} label="Enter description"/>
				<button className="ui button primary">Submit</button>
			</form>
		)
	}
}

// Function name must be validate
const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = "Please enter a title"; 
	}

	if (!formValues.description) {
		errors.description = "Please enter a description";
	}

	return errors;
}

// Cleaner approach instead of directly wrapping the reduxForm statement within connect.
/* const formWrapped = reduxForm({
	form: 'streamCreate',
	validate
})(StreamForm)

export default connect(
	null,
	{
		createStream
	}
)(formWrapped); */

// As we do not need an action creator createStream within StreamCreate, the connect wrapper is no use. 
// So we can simplify the above two statements to a single export default reduxForm... statement
export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);