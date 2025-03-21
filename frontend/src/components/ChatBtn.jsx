import React, { useState } from 'react'
import ChatBox from './ChatBox';

export default function ChatBtn() {
    const [chatbox, setChatbox] = useState(false);

    const handleChatClick = () => {
        setChatbox(!chatbox);
    }

    return (
        <>
            {chatbox === false ?
                <div className="chat-btn w-fit bg-amber-600 sticky bottom-4 left-[95%] p-2 rounded-full cursor-pointer shadow-lg">
                    <button className="text-white font-semibold cursor-pointer" onClick={handleChatClick}>Chat</button>
                </div>
                : ""}
            {chatbox && <ChatBox isOpen={chatbox} onClose={setChatbox} />}
        </>
    )
}
