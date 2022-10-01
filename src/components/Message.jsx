import React from 'react';

const Message = ({message}) => {
    const {uid, text, emotion} = message;

    return (
        <div>
            {text} / {emotion} / {uid}
        </div>
    );
};

export default Message;
