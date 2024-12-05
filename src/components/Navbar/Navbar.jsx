import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="navbar">
      <img className="logo" src="plogo.png" alt="LOGO" />
      <ul className="list">
        <li
          className={
            active === "home" ? `list_items item1 active` : `list_items item1`
          }
          onClick={() => setActive("home")}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={
            active === "skills" ? `list_items item2 active` : `list_items item2`
          }
          onClick={() => setActive("skills")}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className={
            active === "projects"
              ? "list_items item3 active"
              : "list_items item3"
          }
          onClick={() => setActive("projects")}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={
            active === "contacts"
              ? "list_items item4 active"
              : "list_items item4"
          }
          onClick={() => setActive("contacts")}
        >
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <button className="nav-btn dekstop_btn">Let's Connect</button>
      <img
        onClick={() => setToggle(false)}
        src="menu.svg"
        className="menu-icon"
        alt=""
      />

      {/* mobile view */}
      <div className={toggle ? `mobile-nav` : `mobile-nav toggle`}>
        <div className="mobile-icon">
          <img className="m_logo" src="plogo.png" alt="" />
          <img
            className="cross-icon"
            onClick={() => setToggle(true)}
            src="cross.svg"
            alt=""
          />
        </div>
        <ul className="mobile-list">
          <li
            className={
              active === "home"
                ? `mobile_list_items item1 active`
                : `mobile_list_items item1`
            }
            onClick={() => setActive("home")}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={
              active === "skills"
                ? `mobile_list_items item2 active`
                : `mobile_list_items item2`
            }
            onClick={() => setActive("skills")}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={
              active === "projects"
                ? "mobile_list_items item3 active"
                : "mobile_list_items item3"
            }
            onClick={() => setActive("projects")}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={
              active === "contacts"
                ? "mobile_list_items item4 active"
                : "mobile_list_items item4"
            }
            onClick={() => setActive("contacts")}
          >
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <button className="nav-btn mobile_btn">Let's Connect</button>
      </div>
    </nav>
  );
};

export default Navbar;
