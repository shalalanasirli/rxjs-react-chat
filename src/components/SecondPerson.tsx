import {useState, useLayoutEffect, useRef, useEffect} from "react";
import chatStore from '../store/chat';

const SecondPerson = () => {
    const [chatState, setChatState] = useState(chatStore.initialState);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        chatStore.subscribe(setChatState);
        chatStore.init();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }, [chatState]);

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        const messageObject = {
            person: 'second-person',
            text: e.target.elements.messageInput.value.trim(),
        };

        chatStore.sendMessage(messageObject);
        e.target.reset();
    };

    return (
        <div className="messages-wrapper">
            <div>
                <div className="chat-box" ref={messagesEndRef}>
                    {chatState.data.map((message, i) => (
                        <div key={i} className={"chat" + (message.person === "second-person" ? " sender" : "")}>
                            <p className={message.person}>{message.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <form className="message-form" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    id="messageInput"
                    name="messageInput"
                    autoFocus
                    required
                />
                <button type="submit">Send</button>
                <br/>
            </form>
        </div>
    );
}

export default SecondPerson;