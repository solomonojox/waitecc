import React from 'react'

const ChatAI = () => {
    return (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-50">
            <div>
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/DFvlAorCZhYwVSHcJL_Gw"
                    width="100%"
                    style={{ height: '100%', minHeight: '400px' }}
                    frameBorder="0" // Note: camelCase in React
                    title="Chatbot" // Important for accessibility
                />
            </div>
        </div>
    )
}

export default ChatAI