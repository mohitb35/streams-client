import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
	/* const actions = (
		<React.Fragment>
			<button className="ui button">Cancel</button>
			<button className="ui button negative">Delete</button>
		</React.Fragment>
	); */

	// Using a <div> tag as below, the modal css gets affected, but we can't just send the buttons back as they must be wrapped within some tags
	// Alternative - use React.Fragment
	const actions = (
		<div>
			<button className="ui button" onClick={()=>{history.push('/')}}>Cancel</button>
			<button className="ui button negative">Delete</button>
		</div>
	);

	return (
		<div>
			StreamDelete
			<Modal 
				title="Delete Stream"
				content="Are you sure you want to delete this stream?"
				actions={actions}
				onDismiss={()=>{history.push('/')}}
			/>
		</div>
	);
};

export default StreamDelete;