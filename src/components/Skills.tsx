import React, { FC } from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaAngular, FaVuejs} from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactElement;
}

const skillsData: Skill[] = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Sass', icon: <FaSass /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
];

const SkillsList: FC = () => {
  return (
    <ul className="intro-content-skills my-2">
      {skillsData.map((skill, index) => (
        <li key={index} className={`intro-content-skills-${skill.name.toLowerCase()}`}>
          {skill.icon}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
