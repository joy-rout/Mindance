import React from "react";
import "./whatWeOffer.css";
import Icon1 from "../Icons/Connect to a listener.svg";
import Icon2 from "../Icons/Locate therapists around you.svg";
import Icon3 from "../Icons/Mood tracker.svg";
import Image11 from "../Images/Group_26.svg";
function whatWeOffer() {
  return (
    <div>
    <div className="whatweoffer">
      <p className="title">What We Offer</p>
      <div id="leftbox">
        <img className="icon" src={Icon1} alt="icon" />
        <p className="offer">Connect To A Listener</p>
      </div>
      <div id="middlebox">
        <img className="icon" src={Icon2} alt="icon" />
        <p className="offer"> Locate Therapists Near You</p>
      </div>
      <div id="rightbox">
        <img className="icon" src={Icon3} alt="icon" />
        <p className="offer"> Mood Tracker </p>
      </div>
    </div>
    <div className="weHelpWith">
    <p className="weHelpWith-para">
      We Help With
      </p>

    <img className="weHelpWith-image" src={Image11} alt="we help with" />


  </div>
  </div>
  );
}

export default whatWeOffer;
