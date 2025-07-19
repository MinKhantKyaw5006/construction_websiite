import React from 'react';
import { RiFacebookBoxFill, RiInstagramFill, RiLineFill } from 'react-icons/ri';

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials = [
  {
    icon: <RiFacebookBoxFill />,
    path: 'https://www.facebook.com/profile.php?id=61562782212198',
  },
  {
    icon: <RiInstagramFill />,
    path: 'https://www.instagram.com/sandtech.eng/profilecard/?igsh=MXhwd2s2NGd0empveQ==',
  },
  {
    icon: <RiLineFill />,
    path: 'https://line.me/R/ti/p/@833xzwsc',
  },
];

const Socials = ({ containerStyles = '', iconStyles = '' }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
