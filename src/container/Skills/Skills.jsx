// import React from "react";
import React, { useState, useEffect } from "react";
// import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
// import education from "../../../../backend_sanity/schemas/education";

const Skills = () => {
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const sorted = educations.sort((a, b) => {
    return b.passing_Year - a.passing_Year;
  });
  useEffect(() => {
    const query = '*[_type == "education"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setEducations(data);
      // setEducations(sorted);

      // console.log(educations);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text ">Skills And Education</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              // whileHover={{ scale: [1, 1.1] }}
              transition={{ duration: 0.2 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              {/* <h2>Hello</h2> */}
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {educations.map((education) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: [1, 1.1] }}
                className="app__skills-exp-work"
                // data-tip
                // data-for={education.degree}
                key={education.degree}
              >
                <h2 className="bold-text">{education.degree}</h2>
                <p className="p-text"> {education.institution}</p>
                <p>
                  {education.marks} &ensp;&ensp; Passing Year - &nbsp;
                  {education.passing_Year}
                </p>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
