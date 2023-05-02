import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FirstPage from './components/Landing Page/firstPage'
import Navbar from './components/Landing Page/Navbar'
import WhatWeOffer from "./components/Landing Page/whatWeOffer";
import ChatBot from "./components/Landing Page/chatbot"
import Articles from './components/Landing Page/articles'
import Newsletter from "./components/Landing Page/Newsletter";
import SoundPage from "./components/Landing Page/Sounds"

// import LandingPage from "./components/Landing Page/landingPage";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
      <Navbar/>
      <FirstPage/>
      <WhatWeOffer/>
      <ChatBot/>
      <Articles/>
      <Newsletter/>
      <SoundPage/>

 
      {/* <LandingPage/> */}
     
  </>
);
