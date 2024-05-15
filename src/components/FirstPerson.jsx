import {useEffect, useState} from "react";
import chatStore from "../store/chat";

const FirstPerson = () => {
	const [chatState, setChatState] = useState(chatStore.initialState);

	useEffect(() => {
		chatStore.subscribe(setChatState);
		chatStore.init();
	}, []);

	const onFormSubmit = e => {
		e.preventDefault();
		const messageObject = {
			person: 'first-person',
			text: e.target.elements.messageInput.value.trim(),
		};
		chatStore.sendMessage(messageObject);
		e.target.reset();
	};

	return (
		<div className="container">
			<h2>Mycroft</h2>
			<div className="chat-box">
				{chatState.data.map((message, i) => (
					<div key={i}>
						<p className={message.person}>{message.text}</p>
						<div className="clear"></div>
					</div>
				))}
			</div>
			<form id="messageForm" onSubmit={onFormSubmit}>
				<input
					type="text"
					id="messageInput"
					name="messageInput"
					placeholder="type here..."
					autoFocus
					required
				/>
				<button type="submit">Send</button>
				<br/>
			</form>
			<button className="clear-button" onClick={() => chatStore.clearChat()}>
				Clear Chat
			</button>
		</div>
	);
}
export default FirstPerson;