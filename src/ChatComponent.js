
import React, { useState, useEffect } from "react";


import BotMessage from "./chatbot/BotMessage";
import UserMessage from "./chatbot/UserMessage";
import Messages from "./chatbot/Messages";

import Input from "./chatbot/input";

import API from "./ChatbotAPI";


import Header from "./chatbot/Header";  





const ChatComponent = (props) => {

    
  const [messages, setMessages] = useState([]);


  const [activeClass, setActiveClass] = useState("")


  const pull_data = (data) => {
    setActiveClass(!data);
    props.mainparent(data);
  }

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      
      <UserMessage key={messages.length + 1} text={text} />,
      
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />

    );
    setMessages(newMessages);
  };


  return (


    <div  className={activeClass === props.chatshow ? "chatbot active" : "chatbot" }>
        <Header   func={pull_data}  />
        <Messages messages={messages} />
        <Input onSend={send} />
    </div>
  )
}

export default ChatComponent