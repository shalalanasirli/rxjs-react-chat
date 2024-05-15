import {Subject} from "rxjs";

const subject = new Subject();

const initialState = {
	status: '',
	data: [],
	newDataCount: 0,
	error: ''
}

let state = initialState;

const chatStore = {
	init: () => {
		subject.next(state);
		state = {...state, newDataCount: 0}
	},
	subscribe: setState => subject.subscribe(setState),
	sendMessage: (m) => {
		state = {
			...state,
			data: [...state.data, m],
			newDataCount: state.newDataCount + 1
		};
		subject.next(state);
	},
	clearChat: () => {
		state = initialState;
		subject.next(state);
	},
	initialState
}

export default chatStore;