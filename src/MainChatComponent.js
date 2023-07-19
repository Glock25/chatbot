import React, {useState} from 'react'

import ChatComponent from "./ChatComponent";

import chatBotIcon from "./images/chatboticon.gif"
import "./chatbot.css";

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const MainChatComponent = () => {

     const [chatshow, setChatshow] = useState(false);

     const functionforShow = (data) => {
      
      console.log("this is it",data)


    }

  return (
    <div >

        
            <div className= {`chatIcon ${chatshow}`} onClick={()=> setChatshow(!chatshow)}  id="second-app-title">
                <img src={chatBotIcon} alt="" />
            </div>

                <ReactTooltip
                    anchorId="second-app-title"
                    place="left"
                    
                    style={{ backgroundColor: "rgb(51, 132, 93)", color: "#fff", fontWeight:600}}
                    content="Hi, how can I help you!"
              />
            
           

                <ChatComponent chatshow={chatshow}  mainparent={functionforShow}/>
               
             
            
    
    </div>
  )
}

export default MainChatComponent