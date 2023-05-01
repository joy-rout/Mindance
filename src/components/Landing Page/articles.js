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
                      
                        <p>
                          The term "fight or flight" is also known as the stress
                          response. It's what the body does as it prepares to
                          confront or avoid danger. When appropriately invoked,
                          ....
                        </p>
                        <a
                        href="https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>
                          Read More</p>
                      </a>
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
                        The benefits of meditation are manifold - a calm mind,
                        focussed attention, good concentration power, clarity of
                        thoughts and feelings, balanced emotions in stressful
                        situations, improved communication skills.......
                        
                      </p>
                      <a
                          href="https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response"
                          target="_blank"
                          rel="noreferrer"
                        >
                        <p>
                          Read More</p>
                      </a>
                      
                      {/* <a
                          href="https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="readmore">Read more</p>
                        </a> */}
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
                          Meditation creates the conditions for us to see things
                          more clearly, feel calmer and content, and be kind to
                          ourselves and others no matter what’s happening in our
                          lives. But that doesn’t mean we’ll feel clear.....
                        </p>
                        <a
                        href="https://www.headspace.com/meditation/meditation-for-beginners#:~:text=One%20kind%20of%20meditation%20technique,any%20sensations%20in%20the%20body."
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>
                          Read More</p>
                      </a>
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
                          Running therapy is the (therapeutic) use of a slow
                          endurance run under the guidance of a running
                          therapist as an additional form of treatment for
                          people with psychological problems. It is a form of
                          therapy in which you are physically active.....
                        </p>
                        <a
                        href="https://www.empower-pt.nl/en/therapy/running-therapy/#:~:text=Running%20therapy%20is%20the%20(therapeutic,felt%20on%20a%20psychological%20level."
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>
                          Read More</p>
                      </a>
                      
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
                          Therapy can help improve symptoms of many mental
                          health conditions. In therapy, people can learn to
                          cope with symptoms that may not respond to treatment
                          right away. Research shows the benefits of therapy
                          last longer than medication alone.......
                        </p>
                        <a
                        href="https://www.goodtherapy.org/blog/why-should-i-go-to-therapy-8-signs-its-time-to-see-a-therapist#:~:text=Therapy%20can%20help%20improve%20symptoms,last%20longer%20than%20medication%20alone."
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>
                          Read More</p>
                      </a>
                      
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
