import React from 'react';
import { Field, reduxForm } from 'redux-form';
// Field = react component, reduxForm = function

class StreamCreate extends React.Component {

	renderInput(/*formProps*/{ input }) {
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
			<input 
				type="text" 
				/* {...formProps.input} */
				{ ...input }
				//Shortform representation to include onChange and Value. 
				// You can also destructure input from formProps in the function params, or use ...formProps.input
			/>
		);
	}

	render() {
		// console.log(this.props); 
		// props are made available by wrapping the component in reduxForm
		return (
			<form>
				<Field name="title" component={this.renderInput}/>
				<Field name="description" component={this.renderInput}/>
			</form>
		)
	}

}

export default reduxForm({
	form: 'streamCreate'
})(StreamCreate);