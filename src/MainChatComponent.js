import React, {useState} from 'react'

import ChatComponent from "./ChatComponent";

import chatBotIcon from "./images/chatboticon.png"
import "./chatbot.css";

const MainChatComponent = () => {

     const [chatshow, setChatshow] = useState(false);

  return (
    <div >

        
            <div className="chatIcon" onClick={()=> setChatshow(!chatshow)}>
                <img src={chatBotIcon} alt="" />
            </div>

            

            {
                chatshow ? 
                <ChatComponent />
                :
                ''  
            }
            
    
    </div>
  )
}

export default MainChatComponent