import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import chatStore from '../store/chat';

function Switcher() {
    const [chatState, setChatState] = useState(chatStore.initialState);
    const location = window.location.href.split('/')[3];

    useEffect(() => {
        chatStore.subscribe(setChatState);
        chatStore.init();
    }, []);

    const messageNotification = chatState.newDataCount > 0
        ? <span className="notification">{chatState.newDataCount}</span> : <></>;

    return (
        <div className="switcher-div">
            <NavLink to={"/first-person"} className={"switcher"}>
                Mycroft
                {location !== 'first-person' && location.length > 1 && messageNotification}
            </NavLink>
            <NavLink to={"/second-person"} className={"switcher"}>
                Cortana
                {location !== 'second-person' && messageNotification}
            </NavLink>
        </div>
    )
}

export default Switcher