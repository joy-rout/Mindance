import React from "react";
import "./chatbot.css";
import ImageChatbot from '../Images/REV vecteezy_frame-chatbot-service-icon-hs0521 1.png'
import Icon4 from "../Icons/Faste real time replies.svg";
import Icon5 from "../Icons/Human-centered.svg";
import Icon6 from "../Icons/Determine user's mood.svg";

function chatbot() {
  return (
    <div>

    <div className="container5">
      <div class="one">
        <div className="chatbotText">
            Chat With Chatbot For Assistance
            </div>
      </div>
      <div class="two">
      <img className="ImageChatbot" src={ImageChatbot}  alt='ImageChatbot'/>
      </div>
    </div>
    

    <div className="quality">

    <div id = "leftbox1">
        <img className="icon1" src={Icon4} alt='icon' />
          <p className='offer1'>Fast Real Time Replies</p>
        </div>
        <div id = "middlebox1">
        <img className="icon1" src={Icon5} alt='icon' />
        <p className='offer1'> Human Centered</p>

        </div>
        <div id = "rightbox1">
        <img className="icon1" src={Icon6} alt='icon' />
        <p className='offer1'> Determine User's Mood </p>

        </div>
    </div>
    
    </div>
  );
}

export default chatbot;
