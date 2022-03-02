import React from "react";

function Navbar({options}) {
  return (
    <>
      <div className="navbar">
          <h1 className="navbarText">Sahar Alassaf</h1>
        <h1 className="navbarText">•</h1>
        <a href="SaharHussain.pdf" download>
          <h1 className="navbarText">Resume</h1>
        </a>
      </div>
    </>
  );
}

export default Navbar;
