import React, {useState, useEffect, useContext} from 'react';
import Message from "./Message";
import {addMessage, subscribeInterlocutorEmotion, subscribeMessages} from "../firebase";
import {EMOTIONS} from "../consts";
import {AuthContext, InterlocutorContext} from "../App";

const Chat = () => {
    const {user} = useContext(AuthContext);
    const {interlocutorUid} = useContext(InterlocutorContext);

    useEffect(() => {
        if (interlocutorUid) {
            return subscribeInterlocutorEmotion(interlocutorUid);
        }
    }, [interlocutorUid]);

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (user?.uid) {
            subscribeMessages(setMessages);
        }
    }, [user?.uid])

    const [textMessage, setTextMessage] = useState("");
    const handleSendMessage = async () => {
        // we should not wait of adding the message
        addMessage(textMessage, EMOTIONS.HAPPY);
        setTextMessage("");
    };

    return (
        <div>
            {messages.map(msg => <Message key={msg.text} message={msg}/>)}
            <input type="text" value={textMessage} onChange={e => setTextMessage(e.target.value)}/>
            <button onClick={handleSendMessage}>send message</button>
        </div>
    );
};

export default Chat;
