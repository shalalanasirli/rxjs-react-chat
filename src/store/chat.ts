import {Subject} from "rxjs";

type MessageType = {
    person: string,
    text: string
}

type StateType = {
    status: string,
    data: MessageType[],
    newDataCount: number,
    error: string
}

const subject = new Subject();

const initialState: StateType = {
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
	subscribe: (setState: any) => subject.subscribe(setState),
	sendMessage: (m: MessageType) => {
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