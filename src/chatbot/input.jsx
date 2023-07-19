import React, { useState } from "react";

export default function Input({ onSend }) {
  const [text, setText] = useState("");
  // const [img, setImg] = useState(null);

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


{/* <div>
        
        <div>
          <input
            type="file"
            onChange={e => {
              const imgUrl = URL.createObjectURL(e.target.files[0]);
              console.log(imgUrl);
              setImg(imgUrl);
            }}
          />
        </div>
        {img && (
          <div>
            <img src={img} alt="preview" width="200" hieght="200" />
          </div>
        )}
      </div> */}
        <div className="buttonbox">
              <button className="attachfile" title="Attach File">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.544" height="16.544" viewBox="0 0 16.544 16.544">
  <path d="M6.891,11.614c-.178.331-.072.6.3.97l.34.34c.371.371.649.474.971.3a1.656,1.656,0,0,0,.376-.3L10.895,10.9c.378-.328.768-.192,1.135.174s.6.813.264,1.216L9.262,15.325a2.708,2.708,0,0,1-4.042,0,2.819,2.819,0,0,1,0-4.043l6.062-6.064a2.681,2.681,0,0,1,4.043,0c1.364,1.364,1.163,2.88.335,3.708a1.049,1.049,0,0,0-.139,1.493l.335.335c.51.505.975.349,1.476-.161A5.242,5.242,0,0,0,9.6,3.533L3.533,9.6a5.243,5.243,0,0,0,7.414,7.414l3.032-3.032a3.466,3.466,0,0,0-.434-4.418,3.371,3.371,0,0,0-4.337-.345L7.186,11.238A1.69,1.69,0,0,0,6.891,11.614Z" transform="translate(-2 -2)" fill="#3c3c3c" fill-rule="evenodd"/>
</svg>


        </button>
        
        <button className="sendbutton" title="Send Message">

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
