import React from 'react';
import {Stack} from "@mui/material";
import Message from "./Message";

const Messages = ({messages}) => {


    return (
        <Stack
            sx={{
                display: "flex",
                height: "100%",
                overflowY: "auto",
                padding: 1,
            }}
            spacing={1}
        >
            {messages.map(msg => <Message key={msg.text} message={msg}/>)}
        </Stack>
    );
};

export default Messages;
