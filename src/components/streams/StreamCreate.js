import React from 'react';
import { Field, reduxForm } from 'redux-form';
// Field = react component, reduxForm = function

class StreamCreate extends React.Component {

	renderInput(/*formProps*/{ input, label }) {
		// console.log(formProps);
		// props sent to component within field
		/* return (
			<input 
				type="text" 
				onChange={formProps.input.onChange} 
				value={formProps.input.value}	
			/>
		) */
		return (
			<div className="field">
				<label>{label}</label>
				<input 
					type="text" 
					{ ...input }
					//Shortform representation to include onChange and Value. 
					// You can also destructure input from formProps in the function params, or use ...formProps.input
				/>
			</div>
		);
	}

	render() {
		// console.log(this.props); 
		// props are made available by wrapping the component in reduxForm
		return (
			<form className="ui form">
				<Field name="title" component={this.renderInput} label="Enter title"/>
				<Field name="description" component={this.renderInput} label="Enter description"/>
			</form>
		)
	}

}

export default reduxForm({
	form: 'streamCreate'
})(StreamCreate);