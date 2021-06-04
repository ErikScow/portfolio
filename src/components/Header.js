import React from "react";

const Header = () => {
  return (
    <header id="home">
      <div className="container">
        <h1>Erik Scow: Full Stack Developer</h1>

        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
