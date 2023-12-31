import React, { FC } from 'react';
import { FaGithub, FaInstagram, FaUnsplash, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks: FC = () => {
  return (
    <div className="fixed top-0 mx-auto text-center p-2 social-media-icons">
      <ul className="social-media-icons-list">
        <li>
          <a href="https://github.com/gen035" target="_blank"><FaGithub /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/gen035/" target="_blank"><FaInstagram /></a>
        </li>
        <li>
          <a href="https://unsplash.com/@gen035" target="_blank"><FaUnsplash /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gen035/" target="_blank"><FaLinkedin /></a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaLinks;