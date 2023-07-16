import React from "react";

export default function UserMessage({ text }) {
  return (
    <div className="message-container display-flex align-items-end justify-content-end text-right">
    
      <div className="user-message">{text}</div>
      <div className="usericon">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
            <g id="Group_1" data-name="Group 1" transform="translate(-230.336 -85.336)">
              <circle id="Ellipse_1" data-name="Ellipse 1" cx="15.5" cy="15.5" r="15.5" transform="translate(230.335 85.336)" fill="#5a6091"/>
              <path id="Icon_awesome-user" data-name="Icon awesome-user" d="M7.152,8.174A4.087,4.087,0,1,0,3.065,4.087,4.087,4.087,0,0,0,7.152,8.174ZM10.013,9.2H9.48a5.558,5.558,0,0,1-4.655,0H4.291A4.292,4.292,0,0,0,0,13.487v1.328a1.533,1.533,0,0,0,1.533,1.533H12.772A1.533,1.533,0,0,0,14.3,14.816V13.487A4.292,4.292,0,0,0,10.013,9.2Z" transform="translate(239 92.481)" fill="#fff"/>
            </g>
          </svg>
        </div>
    </div>
  );
}
