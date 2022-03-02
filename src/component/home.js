import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Work from "./work";

function Home() {
  const [options, setOptions] = useState(null);

  const back = () => {
    setOptions(null);
  };

  return (
    <>
      <div className="navbar">
        <button className="navbarText" onClick={back}>
          Sahar Alassaf
        </button>
        <h1 className="navbarText">•</h1>
        <a href="SaharHussain.pdf" download>
          <h1 className="navbarText">Resume</h1>
        </a>
      </div>
      {options ? (
        <Work options={options} />
      ) : (
        <>
          <Fade delay={300} duration={900} triggerOnce>
            <svg viewBox="0 0 500 500" className="banner">
              {/* <title>Sahar Alassaf • Web developer</title> */}
              <defs>
                <path
                  d="M243.2, 382.4c-74.8,   
                    0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
                    135.5 S318, 382.4, 243.2, 382.4z"
                  id="textcircle"
                />
              </defs>
              <text dy="1" textLength="842">
                <textPath xlinkHref="#textcircle">
                  Sahar Alassaf •Web developer •
                </textPath>
              </text>
            </svg>

            <div className="split right">
              <Slide duration={1000} fraction={0.1} triggerOnce>
                <div className="contant">
                  <p className="bold">Hello,</p>
                  <p>
                    I'm Sahar, a web developer. I love to solve problems and
                    strive to design solutions that are simple, effective, and
                    beautifully crafted.
                  </p>
                  <p className="bold">My work</p>
                  {/* <p
                    className="option"
                    onClick={() => {
                      setOptions("Web");
                    }}
                  >
                    Web pages
                  </p>
                  <p
                    className="option"
                    onClick={() => {
                      setOptions("Graphic");
                    }}
                  >
                    Graphic designs
                  </p>
                  <p
                    className="option"
                    onClick={() => {
                      setOptions("Photo");
                    }}
                  >
                    Photography
                  </p> */}

                  <p
                    className="option"
                    onClick={() => {
                      setOptions("iris");
                    }}
                  >
                    Iris
                  </p>
                  <p
                    className="option"
                    onClick={() => {
                      setOptions("bell");
                    }}
                  >
                    Bell Bill
                  </p>
                  <p
                    className="option"
                    onClick={() => {
                      setOptions("game");
                    }}
                  >
                    Flip card
                  </p>

                  <p className="bold">Contact info</p>
                  <a href="mailto: saharalasssaf@gmail.com">
                    <p>Email</p>
                  </a>
                  <a href="https://www.linkedin.com/in/saharalassaf/">
                    <p>Linkedin</p>
                  </a>
                  <a href="https://github.com/saharalassaf">
                    <p>GitHub</p>
                  </a>
                  <br />
                  <h4>
                    I’d love to hear your thoughts – feel free to say hey.
                  </h4>
                </div>
              </Slide>
            </div>
            {/* </Fade> */}
          </Fade>
        </>
      )}
    </>
  );
}

export default Home;
