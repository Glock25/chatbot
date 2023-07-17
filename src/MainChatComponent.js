import React, {useState} from 'react'

import ChatComponent from "./ChatComponent";

import chatBotIcon from "./images/chatboticon.gif"
import "./chatbot.css";

const MainChatComponent = () => {

     const [chatshow, setChatshow] = useState(false);

     const functionforShow = (data) => {
      
      console.log("this is it",data)


    }

  return (
    <div >

        
            <div className="chatIcon" onClick={()=> setChatshow(!chatshow)}>
                <img src={chatBotIcon} alt="" />
            </div>

            

                <ChatComponent chatshow={chatshow}  mainparent={functionforShow}/>
               
             
            
    
    </div>
  )
}

export default MainChatComponent