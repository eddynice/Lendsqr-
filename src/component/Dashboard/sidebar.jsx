import React, { useState } from 'react';
import './sidebar.scss';

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={`sidebar ${active ? 'active' : ''}`}>
      
<div className="sidebar">
  <a  href="#home">
  <li>Home</li>
  
  </a>
  <a href="#news"><li>Home</li></a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a className="" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a className="" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
    </div>
  );
};

export default Sidebar;
