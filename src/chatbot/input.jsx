import React, { useState } from "react";

export default function Input({ onSend }) {
  const [text, setText] = useState("");

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();
    if(text.length > 1){
      onSend(text);  
    }
    
    setText("");
  };

  return (
    <div className="input pxpy-3">
      <form onSubmit={handleSend}>
        <input
          type="text"
          onChange={handleInputChange}
          value={text}
          placeholder="Enter your message here"
        />


<div className="buttonbox">
        <button className="attachfile">
              <svg xmlns="http://www.w3.org/2000/svg" width="21.001" height="21" viewBox="0 0 21.001 21">
        <path id="Subtraction_2" data-name="Subtraction 2" d="M-68.5-77A10.512,10.512,0,0,1-79-87.5,10.512,10.512,0,0,1-68.5-98,10.512,10.512,0,0,1-58-87.5,10.512,10.512,0,0,1-68.5-77Zm2.972-16.749a2.679,2.679,0,0,0-1.9.782l-.634.629-5.069,5.034a3.552,3.552,0,0,0,.02,5.013,3.574,3.574,0,0,0,2.534,1.042,3.576,3.576,0,0,0,2.515-1.023l4.436-4.4.633-.629-.633-.629-.634.629L-68.7-82.9a2.679,2.679,0,0,1-1.9.782,2.682,2.682,0,0,1-1.9-.782,2.642,2.642,0,0,1-.787-1.887,2.642,2.642,0,0,1,.787-1.887l5.07-5.034.633-.628.021-.021a1.785,1.785,0,0,1,1.266-.521,1.787,1.787,0,0,1,1.267.521,1.761,1.761,0,0,1,.525,1.258,1.761,1.761,0,0,1-.525,1.258l-.021.018-5.574,5.508a.88.88,0,0,1-.622.254.88.88,0,0,1-.622-.254.858.858,0,0,1-.258-.615.855.855,0,0,1,.258-.613l3.732-3.687-.621-.615-3.111,3.073-.622.614a1.735,1.735,0,0,0,.019,2.439,1.755,1.755,0,0,0,1.242.508,1.764,1.764,0,0,0,1.225-.49l5.589-5.489a2.644,2.644,0,0,0,.788-1.889,2.641,2.641,0,0,0-.788-1.887A2.679,2.679,0,0,0-65.528-93.75Z" transform="translate(79 98)" fill="#3c3c3c"/>
      </svg>

        </button>
        
        <button className="sendbutton">
          
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 500 500"
          >
            <g>
              <g>
                <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" />
              </g>
            </g>
          </svg>
        </button>
        </div>
      </form>
    </div>
  );
}
