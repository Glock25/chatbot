import React, { useState } from "react";

import botIcon from "../images/boticon.png"

export default function Header(props) {

  const [closeIcon, setCloseIcon] = useState(false);

  const [alertpopup, setAlertpopup] = useState(false)

  props.func(closeIcon);

  

  return <div className=" chatbotheader d-flex">
            {/* <div className="leftarrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="9.854" height="17.237" viewBox="0 0 9.854 17.237">
                <path  d="M14.221,14.81l6.522-6.517A1.232,1.232,0,0,0,19,6.553l-7.389,7.384a1.229,1.229,0,0,0-.036,1.7l7.42,7.435a1.232,1.232,0,1,0,1.745-1.74Z" transform="translate(-11.251 -6.194)" fill="#fff"/>
              </svg>

            </div> */}

            <div className="icon_name_head d-flex">
                <div className="usericon">
                  
                  <img src={botIcon} alt="" />

                </div>
                <div className="rtname">
                    <strong className="d-block">AI Bot</strong>
                    <small>Online</small>
                </div>
            </div>

            <div className="closebutton marginauto" 
            title="Clear this Conversation !"
            onClick={()=>{setAlertpopup(!alertpopup)}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                <path d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)" fill="#fff"/>
              </svg>

            </div>

          
              <div  className={alertpopup ? "alertcustombox show"  : "alertcustombox " }>
                <p style={{marginTop:0, fontSize:"12px", fontWeight : 500}}>
                  Are you sure you want to clear this conversation?
                </p>


                <button className="clearbutton" onClick={() => {setCloseIcon(!closeIcon) } }>Clear</button>
                <button className="notsurebutton"     onClick={()=>{setAlertpopup(!alertpopup)}} >Not Sure</button>
            </div>
           
          


        </div>;
}
