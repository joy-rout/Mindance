/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import { useRef } from "react";
import { FaBars, FaTimes ,FaVolumeUp } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../Images/butterfly.png";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./firstPage.css";
import Image2 from "../Images/Mental Health 1-01 1.png";
import Image3 from "../Images/image3.png";

import "./whatWeOffer.css";
import Icon1 from "../Icons/Connect to a listener.svg";
import Icon2 from "../Icons/Locate therapists around you.svg";
import Icon3 from "../Icons/Mood tracker.svg";
import "./chatbot.css";
import ImageChatbot from "../Images/REV vecteezy_frame-chatbot-service-icon-hs0521 1.png";
import Icon4 from "../Icons/Faste real time replies.svg";
import Icon5 from "../Icons/Human-centered.svg";
import Icon6 from "../Icons/Determine user's mood.svg";
import "./articles.css";
import Image5 from "../Images/vector-free-bedtime-illustration 1.svg";
import Image6 from "../Images/vecteezy_woman-meditating-in-nature-and-leaves-concept-illustration_4261144.jpg";
import Image7 from "../Images/1694_U1RVRElPIEtBVCAzOTItMzE.jpg";
import Image8 from "../Images/vecteezy_disabled-paralympic-athlete-running-in-the-field_.jpg";
import Image9 from "../Images/psychologist-illustration-vector.jpg";
import Image10 from "../Images/Ellipse 20.svg";
import VolumeUp from "./Sounds"

const buttonStyle = {
  fontFamily: "cursive",
  boxShadow: "0 4px 8px 0 rgb(56, 110, 129), 0 6px 20px 0 rgb(56, 110, 129)",
  backgroundColor: "#D7BFFE",
  color: "#8931CC",
};

const buttonStyle1 = {
  fontFamily: "cursive",
  boxShadow: "0 4px 8px 0 rgb(56, 110, 129), 0 6px 20px 0 rgb(56, 110, 129)",
  backgroundColor: "#5F30DF",
  color: "#E5FF9B",
};

const LandingPage = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <div className="header ">
        <h1>
          <img className="image" src={Logo} /> Mindance{" "}
        </h1>
        <nav ref={navRef}>
          <a href="../Home Page/homePage.js">Contact</a>
          <a href="/#homePage">FAQ</a>
          <a href="/#">About us</a>
          <a href="/#">Emergency Helpline</a>
            <VolumeUp/>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
      {/* ///////////// First Page ///////////// ///////////// First Page
      ///////////// ///////////// First Page ///////////// */}
      <div className="maincontainer">
        <div className="flex-parent-element ">
          {/* first child  */}
          <div className="flex-child-element firstpage container4 ">
            <div className="quote1">Mental Wellbeing Done Right</div>

            <div className="quote2">
              Congratulations on your first brave step , you are almost there .
            </div>

            <Stack className="button1" spacing={6} direction="row">
              <Button style={buttonStyle} variant="outlined">
                <span>Login</span>
              </Button>
              <Button style={buttonStyle1} variant="contained">
                Get Started
              </Button>
            </Stack>
          </div>

          {/* Second Child */}
          <div className="flex-child-element">
            <div className="container3">
              <div className="container">
                <div class="lefttop dot"></div>
                <div class="leftbottom dot"></div>
                <img className="image2" src={Image2} />
                <p style={{ color: "#B6FC95" }}>you are loved</p>
                <div class="righttop dot"></div>
                <div class="rightbottom dot"></div>
              </div>
              <div className="container2">
                <div class="lefttop dot"></div>
                <div class="leftbottom dot"></div>
                <img className="image3" src={Image3} />
                <p style={{ color: "#7A50EF" }}>
                  you don't have to struggle in silence
                </p>
                <div class="righttop dot"></div>
                <div class="rightbottom dot"></div>
              </div>
            </div>

            {/* <div className="container4">
              <div className="typo">
                <p>We Help With :</p>
              </div>
              <div className="items">
                <p>
                  <i class="fa-solid fa-star fa-spin"></i> Anxiety{" "}
                </p>
                <p>
                  <i class="fa-solid fa-star fa-spin"></i> Depression{" "}
                </p>
                <p>
                  <i class="fa-solid fa-star fa-spin"></i> Work Related Issue{" "}
                </p>
                <p>
                  <i class="fa-solid fa-star fa-spin"></i> Eating Disorders{" "}
                </p>
                <p>
                  <i class="fa-solid fa-star fa-spin"></i> PTSD{" "}
                </p>
                <p>
                  <i class="fa-solid fa-star fa-spin"></i> Relation Problems{" "}
                </p>
                <p>
                  <i class="fa-solid fa-star fa-spin"></i> and more......{" "}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* //////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page //////////////// Second Page ////////
      //////// Second Page //////////////// Second Page //////// */}

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

      {/* //////////Third Page////////// //////////Third Page////////// //////////Third Page////////////////////Third Page////////// //////////Third Page////////// //////////Third Page//////////
    //////////Third Page////////// //////////Third Page//////////
    //////////Third Page////////// */}

      <div>
        <div className="container5">
          <div class="one">
            <div className="chatbotText">Chat With Chatbot For Assistance</div>
          </div>
          <div class="two">
            <img
              className="ImageChatbot"
              src={ImageChatbot}
              alt="ImageChatbot"
            />
          </div>
        </div>

        <div className="quality">
          <div id="leftbox1">
            <img className="icon1" src={Icon4} alt="icon" />
            <p className="offer1">Fast Real Time Replies</p>
          </div>
          <div id="middlebox1">
            <img className="icon1" src={Icon5} alt="icon" />
            <p className="offer1"> Human Centered</p>
          </div>
          <div id="rightbox1">
            <img className="icon1" src={Icon6} alt="icon" />
            <p className="offer1"> Determine User's Mood </p>
          </div>
        </div>
      </div>
      {/* ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles//////// 
    ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles////////  ////////Articles//////// 
    ////////Articles////////  */}

      <div className="container6">
        <p className="article">Latest Articles</p>
        <div className="container7">
          <div className="leftbox2">
            <a href="https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response">
              <img className="image6" src={Image5} alt="article" />
            </a>
            {/* <div class="text-block">
    <h4>Breathing Exercise For Better Sleep</h4>
    
  </div> */}
          </div>
          <div className="rightbox2">
            <a href="https://www.mindful.org/how-to-meditate/">
              <img className="image7" src={Image6} alt="article" />
            </a>
            {/* <div class="text-block2">
    <h4>The Art Of Meditation</h4>
    
  </div> */}
          </div>
        </div>

        <div className="container8">
          <div className="leftbox3">
            <a href="https://www.innerpeacefellowship.org/how-to-meditate/?gclid=CjwKCAiAhKycBhAQEiwAgf19euB7pakN2EYBV23ibv5cuKIkST2F5gETsCP7uX-xGQ-7Q83KYO1MVRoC2OcQAvD_BwE">
              <img className="image8" src={Image7} alt="article" />
            </a>
            {/* <div class="text-block3">
    <h4>Meditation For Beginners</h4>
  </div> */}
          </div>
          <div className="middlebox3">
            <a href="https://www.verywellfit.com/how-to-start-running-the-absolute-beginners-guide-2911191">
              <img className="image8" src={Image8} alt="article" />
            </a>
            {/* <div class="text-block3">
    <h4>Running : A therapy</h4>
    
  </div> */}
          </div>
          <div className="rightbox3">
            <a href="https://www.psychologytoday.com/us/basics/therapy">
              <img className="image9" src={Image9} alt="article" />
            </a>
            {/* <div class="text-block4">
    <h4>Does Therapy Really Help ?</h4>
    
  </div> */}
          </div>
        </div>
      </div>

      {/* /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter///// 
    /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter///// 
    /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter///// 
    /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter/////  /////NewsLetter///// 
     */}

      <div className="newsletter">
        <div className="head-text">
          <div className="text-on-image">
            <div className="newsletter-title">Sign up for our newsletter </div>
            <div className="newsletter-text">
              Get latest articles, tips etc related to mental health on your
              email every week because we want to be there for you and
              celeberate your little victories.
            </div>
          </div>
          <img className="image10" src={Image10} alt="newsletter" />
        </div>
      </div>

      {/* <button id="postYourAdd" onclick="postYourAdd()">OPEN</button>
    <iframe id="forPostyouradd" data-src="http://www.w3schools.com" src="about:blank" width="500" height="200" style="background:#ffffff"></iframe> */}
      {/* <button onclick="displayIframe()">Click me</button> */}
      <form>
        {" "}
        <button type="button" id="files" onclick="show">
          button
        </button>{" "}
      </form>
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/33057093-a80b-415d-90b5-62702409f1d6"
      />
    </div>
  );
};

export default LandingPage;
