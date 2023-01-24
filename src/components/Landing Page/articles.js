import React from "react";
import "./articles.css";

import Image5 from "../Images/sleeping.gif";
import Image6 from "../Images/meditation.gif";
import Image7 from "../Images/meditation2.gif";
import Image8 from "../Images/fitness.gif";
import Image9 from "../Images/tthinking2.gif";

const articles = () => {
  // const card = document.querySelector(".card__inner");

  // card.addEventListener("click", function () {
  //   card.classList.toggle("is-flipped");
  // });

  return (
    <div className="articles">
    <p className="article_p">Latest Articles</p>
    
    <div className="table">
      
      <div class="box">
        <div class="box-row">
        
      <div class="box-cell card1">
        <div class="card__inner">
          <div class="card__face card__face--front">
            <img className="article_image" src={Image5} alt="article" />
          </div>
          <div class="card__face card__face--back">
            <div class="card__content">
              <div class="card__header">
                <img className="pp" src={Image5} alt="article" />

                <h2>Breathing Exercise For Better Sleep</h2>
              </div>
              <div class="card__body">
                {/* <h3>JavaScript Wizard</h3> */}
                <p>
                  Lorem ipsum <strong>dolor</strong> sit amet, consectetur{" "}
                  <strong>adipiscing</strong> elit. Sed id erat a magna lobortis
                  dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien
                  placerat, <strong>laoreet</strong> tincidunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-cell card2">
        <div class="card__inner">
          <div class="card__face card__face--front">
            <img className="article_image" src={Image6} alt="article" />
          </div>
          <div class="card__face card__face--back">
            <div class="card__content">
              <div class="card__header">
                <img className="pp" src={Image6} alt="article" />

                <h2>The Art Of Meditation</h2>
              </div>
              <div class="card__body">
                
                <p>
                  Lorem ipsum <strong>dolor</strong> sit amet, consectetur{" "}
                  <strong>adipiscing</strong> elit. Sed id erat a magna lobortis
                  dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien
                  placerat, <strong>laoreet</strong> tincidunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-cell card3">
        <div class="card__inner">
          <div class="card__face card__face--front">
            <img className="article_image" src={Image7} alt="article" />
          </div>
          <div class="card__face card__face--back">
            <div class="card__content">
              <div class="card__header">
                <img className="pp" src={Image7} alt="article" />

                <h2>Meditation For Beginners</h2>
              </div>
              <div class="card__body">
                
                <p>
                  Lorem ipsum <strong>dolor</strong> sit amet, consectetur{" "}
                  <strong>adipiscing</strong> elit. Sed id erat a magna lobortis
                  dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien
                  placerat, <strong>laoreet</strong> tincidunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
    <div class="box">
        <div class="box-row">
        
      <div class="box-cell card1">
        <div class="card__inner">
          <div class="card__face card__face--front">
            <img className="article_image" src={Image8} alt="article" />
          </div>
          <div class="card__face card__face--back">
            <div class="card__content">
              <div class="card__header">
                <img className="pp" src={Image8} alt="article" />

                <h2>Running : A therapy</h2>
              </div>
              <div class="card__body">
                
                <p>
                  Lorem ipsum <strong>dolor</strong> sit amet, consectetur{" "}
                  <strong>adipiscing</strong> elit. Sed id erat a magna lobortis
                  dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien
                  placerat, <strong>laoreet</strong> tincidunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-cell card2">
        <div class="card__inner">
          <div class="card__face card__face--front">
            <img className="article_image" src={Image9} alt="article" />
          </div>
          <div class="card__face card__face--back">
            <div class="card__content">
              <div class="card__header">
                <img className="pp" src={Image9} alt="article" />

                <h2>Does Therapy Really Help ?</h2>
              </div>
              <div class="card__body">
                
                <p>
                  Lorem ipsum <strong>dolor</strong> sit amet, consectetur{" "}
                  <strong>adipiscing</strong> elit. Sed id erat a magna lobortis
                  dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien
                  placerat, <strong>laoreet</strong> tincidunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
      
    </div>
      </div>
      </div>
  );
};

export default articles;
