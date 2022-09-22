import React from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { useState } from "react";

import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);
  return (
    <nav className="app__navbar">
      {/*  */}
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text resume">
          <div></div>
          <a
            href={
              "https://drive.google.com/file/d/1igQsDBLVDK6lZONHRbjOJca92CpaIhsq/view?usp=sharing"
            }
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => (toggle == true ? setToggle(false) : setToggle(true))}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <span className="dot"></span>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li >
                <span className="dot"></span>
                <a
                  href={
                    "https://drive.google.com/file/d/1igQsDBLVDK6lZONHRbjOJca92CpaIhsq/view?usp=sharing"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
