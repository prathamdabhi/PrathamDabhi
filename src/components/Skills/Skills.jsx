import React from "react";
import "./Skills.css";
import skills from "../../assets/assets";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <p className="skills__description">Skills And Interest Area</p>
      <div className="all-skills">
        {skills.map((item, index) => {
          return (
            <div key={index}>
              <div className="skills__container">
                <img
                  src={item.url}
                  alt=""
                  style={index === 6 ? { backgroundColor: "white" } : {}}
                />
              </div>
              <p className="skills__name">{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
