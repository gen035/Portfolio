import React, { FC } from 'react';
import { FaGithub, FaInstagram, FaUnsplash, FaLinkedin } from 'react-icons/fa';

interface SocialMediaLink {
  title: string;
  url: string;
  icon: string;
}

const SocialMediaLinks: FC = () => {
  const socialMedia: SocialMediaLink[] = [
    {
      title: "GitHub",
      url: "https://github.com/gen035",
      icon: "FaGithub"
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/gen035/",
      icon: "FaInstagram"
    },
    {
      title: "Unsplash",
      url: "https://unsplash.com/@gen035",
      icon: "FaUnsplash"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/gen035/",
      icon: "FaLinkedin"
    }
  ];

  const renderIcons = (icon: string) => {
    switch (icon) {
      case 'FaGithub':
        return <FaGithub />;
      case 'FaInstagram':
        return <FaInstagram />;
      case 'FaUnsplash':
        return <FaUnsplash />;
      case 'FaLinkedin':
        return <FaLinkedin />;
      default:
        return ''
    }
  };

  return (
    <div className="fixed top-0 mx-auto text-center p-2 social-media-icons">
      <ul className="social-media-icons-list">
        {socialMedia.map((item) => (
          <li key={item.title}>
            <a href={item.url} target="_blank" title={item.title}>{renderIcons(item.icon)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaLinks;