import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="container">
        <span className="container__header">Welcome to my Portfolio</span>

        <h1 className="container__title">
          Hii I'm <span className="title__name">Pratham</span>
        </h1>
        <p className="container__subtitle" data-text="Web Developer">
          Web Developer
        </p>
        <p className="container__description">
          Full-stack developer skilled in JavaScript, React.js, and back-end
          technologies, focused on building scalable applications. Dedicated to
          enhancing user experience through problem-solving, responsive design,
          and hands-on project experience.
        </p>
      </div>
      <div className="header-image">
        <img src="header-img.svg" alt="" />
      </div>
    </section>
  );
};

export default Banner;
