import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Fade, Slide } from "react-awesome-reveal";

function Work({ options }) {
  const [option, setOption] = useState(null);

  useEffect(
    () => {
      if (options === "iris") {
        setOption(iris);
      } else if (options === "bell") {
        setOption(bell);
      } else if (options === "game") {
        setOption(game);
      }
    }, // eslint-disable-next-line
    []
  );

  const iris = {
    imges: [
      "images/ir1.jpg",
      "images/irr2.jpg",
      "images/irr3.jpg",
      "images/irr4.jpg",
      "images/irr5.jpg"
    ],
    titel: "Iris",
    subTitel: "art gallery",
    about:
      "All eyes with different iris colors, arts make their irises dilate. Iris is an art gallery website.",
    design:
      "I made the design minimalistic and neat to emphasis on art. It contains three pages: Home, Favorites, and About us pages.",
    tool: "I developed the website with HTML, CSS and JavaScript using JQuery.",
    link: "https://saharalassaf.github.io/U01P01/",
  };

  const bell = {
    imges: [
      "images/bb.jpg",
      "images/bb1.jpg",
      "images/bb3.jpg",
      "images/bb4.jpg"
    ],
    titel: "Bell Bill",
    subTitel: "subscriptions track",
    about:
      "Bell Bill to take control of your subscriptions. it allows users to record their subscriptions to keep track on them. Help you stop paying for things you no longer need.",
    design:
      "I tried to keep the design minimal, modern, and user-friendly. It contains four pages: Home, Manage budget, Profile, and Help & Support pages.",
    tool: "Full-stack website, I developed front-end with HTML, CSS and React JavaScript library and back-end with Nodejs, Express and MongoDB.",
    link: "",
  };

  const game = {
    imges: ["images/game.jpg"],
    titel: "Flip card",
    subTitel: "memory game",
    about:
      "Or a memory cards game. It game for 7-year-olds and up providing fast-paced fun that moves at the speed of flipping with sound!",
    design:
      "The design looks like a clay shape, to reflect forming and developing through malleable play that your child can indulge in. It contains three levels: 6 cards for easy level, 12 cards medium level, and 24 cards hard level.",
    tool: "I developed the website with HTML, CSS and React JavaScript library.",
    link: "https://flipcard-game.herokuapp.com/",
  };

  return (
    <>
      {option ? (
        <>
          <Slide duration={1000} fraction={0.1} triggerOnce>
            <div className="section leftSide">
              <div className="contaner">
                {/* <button className="arrow">&#8636;</button> */}
                <div className="titel">
                  <h1>{option.titel}</h1>
                  <h6 className="subTitel">({option.subTitel})</h6>
                </div>
                <p className="about">{option.about}</p>
                <p className="design">{option.design}</p>
                <p className="tool">{option.tool}</p>
                <a className="link" href={option.link}>
                  website
                </a>
              </div>
            </div>
          </Slide>

          <Fade delay={700} duration={900} triggerOnce>
            <div className="section rightSide">
              <div className="contaner">
                <Carousel
                  fade
                  interval={3000}
                  indicators={false}
                  className="carousel"
                >
                  {option &&
                    option.imges.map((item, i) => (
                      <Carousel.Item key={i}>
                        <img className="d-block w-500" src={item} alt="img" />
                      </Carousel.Item>
                    ))}
                </Carousel>

                <svg viewBox="0 0 500 500" className="svgWork">
                  <defs>
                    <path
                      d="M243.2, 382.4c-74.8,   
                    0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
                    135.5 S318, 382.4, 243.2, 382.4z"
                      id="textcircle"
                    />
                  </defs>
                  <text dy="1" textLength="400">
                    <textPath xlinkHref="#textcircle">
                      • {option.titel} •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <svg viewBox="0 0 500 500" className="loding">
            <defs>
              <path
                d="M243.2, 382.4c-74.8,   
            0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
            135.5 S318, 382.4, 243.2, 382.4z"
                id="textcircle"
              />
            </defs>
            <text dy="1" textLength="800">
              <textPath xlinkHref="#textcircle">• • • • • • • • • •</textPath>
            </text>
          </svg>
        </>
      )}
    </>
  );
}

export default Work;
