import React, { FC } from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaAngular, FaVuejs } from 'react-icons/fa';

const Skills: FC = () => {
  return (
    <ul className="intro-content-skills mt-2">
      <li className="intro-content-skills-html"><FaHtml5 /></li>
      <li className="intro-content-skills-css"><FaCss3Alt /></li>
      <li className="intro-content-skills-sass"><FaSass /></li>
      <li className="intro-content-skills-js"><FaJsSquare /></li>
      <li className="intro-content-skills-react"><FaReact /></li>
      <li className="intro-content-skills-angular"><FaAngular /></li>
      <li className="intro-content-skills-vue"><FaVuejs /></li>
    </ul>
  );
}

export default Skills;