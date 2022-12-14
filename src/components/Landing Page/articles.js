/* eslint-disable no-lone-blocks */
import React from "react";
import "./articles.css";
import Image5 from "../Images/vector-free-bedtime-illustration 1.svg";
import Image6 from "../Images/vecteezy_woman-meditating-in-nature-and-leaves-concept-illustration_4261144.jpg";
import Image7 from "../Images/1694_U1RVRElPIEtBVCAzOTItMzE.jpg";
import Image8 from "../Images/vecteezy_disabled-paralympic-athlete-running-in-the-field_.jpg";
import Image9 from "../Images/psychologist-illustration-vector.jpg";

function articles() {
  return (
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
  );
}

export default articles;


{/* <div className="container6">
      <p className="article">Latest Articles</p>
      <div className="container7">
        
        <div className="leftbox2">
          <img className="image6" src={Image5} alt="article" />
          <div class="text-block">
    <h4>Breathing Exercise For Better Sleep</h4>
    
  </div>
        </div>
        <div className="rightbox2">
          <img className="image7" src={Image6} alt="article" />
          <div class="text-block2">
    <h4>The Art Of Meditation</h4>
    
  </div>
        </div>
      </div>

      <div className="container8">
        <div className="leftbox3">
          <img className="image8" src={Image7} alt="article" />
          <div class="text-block3">
    <h4>Meditation For Beginners</h4>
  </div>
        </div>
        <div className="middlebox3">
          <img className="image8" src={Image8} alt="article" />
          <div class="text-block3">
    <h4>Running : A therapy</h4>
    
  </div>
        </div>
        <div className="rightbox3">
          <img className="image9" src={Image9} alt="article" />
          <div class="text-block4">
    <h4>Does Therapy Really Help ?</h4>
    
  </div>
        </div>
      </div>
    </div> */}