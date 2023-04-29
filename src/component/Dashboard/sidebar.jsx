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
  <ul>
    <li><a href="#homme">Dashboard</a></li>
    <li><a href="#homme">Customer</a></li>
    <li><a href="#homme">User</a></li>
    <li><a href="#homme">Guarator</a></li>
    <li><a href="#homme">Loans</a></li>
    <li><a href="#homme">News</a></li>
    <li><a href="#homme">Home</a></li>
    <li><a href="#homme">About</a></li>
    <li><a href="#homme">News</a></li>
  </ul>
 
 
  
</div>
    </div>
  );
};

export default Sidebar;
