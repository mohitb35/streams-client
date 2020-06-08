import {
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	EDIT_STREAM,
	DELETE_STREAM,
} from '../actions/types';

// state = streams for this reducer
export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return { 
				...state,
				...action.payload.reduce(
					(streamMap, item) => {
						return {...streamMap, [item.id]: item };
					},
					{}
				) 
			};

		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
			
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
			
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
			
		case DELETE_STREAM:
			const newState = { ...state };
			delete newState[action.payload];
			return newState;

		default:
			return state;
	}
}