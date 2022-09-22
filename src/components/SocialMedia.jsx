import React from "react";
import {
  BsInstagram,
  BsGoogle,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
  BsSnapchat,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.instagram.com/bajaj___sahab" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/ishit-bajaj-a44981121/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="mailto:ishitbajaj@gmail.com" target="_blank">
          <BsGoogle />
        </a>
      </div>
      <div>
        <a href="https://wa.me/+919105545525" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
