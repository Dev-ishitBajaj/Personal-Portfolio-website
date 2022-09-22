import React, { useState, useEffect } from "react";
import "./About.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Curiosity",
//     description: "Curiosity about new things aids my understanding of them.",
//     imgUrl: images.curiosity,
//   },
//   {
//     title: "Adaptability",
//     description:
//       "I am able to quickly adjust to new situations, which are typical in the software sector.",
//     imgUrl: images.adaptability,
//   },
//   {
//     title: "Love of learning",
//     description:
//       "I enjoy continuing to educate myself by picking up new skills that advance my development.",
//     imgUrl: images.learner,
//   },
//   {
//     title: "Positive Attitude",
//     description:
//       "I can approach any task I've been assigned,  with full of optimism and a positive mindset.",
//     imgUrl: images.positive,
//   },
// ];

const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setabouts(data));
    // console.log(abouts);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Qualities that I possess
        <span> to become</span>
        <br />A Great <br />
        <span> software engineer</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="about.title" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text">{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
