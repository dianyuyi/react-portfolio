import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaTwitterSquare,
} from 'react-icons/fa';

const socialMedia = [
  {
    id: 0,
    name: 'linkedin',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/weiting-lo-a8b74b107/',
  },
  {
    id: 1,
    name: 'github',
    icon: <FaGithubSquare />,
    url: 'https://github.com/dianyuyi',
  },
  {
    id: 2,
    name: 'medium',
    icon: <FaMedium />,
    url: 'https://medium.com/%E6%9B%B8%E5%A2%A8%E8%88%87%E7%A8%8B%E5%BC%8F%E4%B9%8B%E6%B5%B7',
  },
  {
    id: 3,
    name: 'twitter',
    icon: <FaTwitterSquare />,
    url: 'https://twitter.com/dianyuyi',
  },
];

export default socialMedia;
