import {useEffect, useRef, useState} from "react";
import chatStore from "../store/chat";

const FirstPerson = () => {
    const [chatState, setChatState] = useState(chatStore.initialState);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        chatStore.subscribe(setChatState);
        chatStore.init();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }, [chatState]);

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        chatStore.sendMessage({
            person: 'first-person',
            text: e.target.elements.messageInput.value.trim(),
        });
        e.target.reset();
    };

    return (
        <div className="messages-wrapper">
            <div>
                <div className="chat-box" ref={messagesEndRef}>
                    {chatState.data.map((message, i) => (
                        <div key={i} className={"chat" + (message.person === "first-person" ? " sender" : "")}>
                            <p className={message.person}>{message.text}</p>
                        </div>
                    ))}
                </div>
                <div className="dummy"></div>
            </div>
            <form className="message-form" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    id="messageInput"
                    name="messageInput"
                    placeholder="Type here..."
                    autoFocus
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
export default FirstPerson;