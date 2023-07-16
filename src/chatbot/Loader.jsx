import React from "react";

export default function Loader() {
  return (
    <>
    Typing
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="5" viewBox="0 0 81 17">
  <circle  cx="8.5" cy="8.5" r="8.5" fill="#fff">
  <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
  </circle>
  <circle  cx="8.5" cy="8.5" r="8.5" transform="translate(32)" fill="#fff">
  <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
  </circle>
  <circle cx="8.5" cy="8.5" r="8.5" transform="translate(64)" fill="#fff">
  <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
  </circle>
    
</svg>



    </>
  );
}
