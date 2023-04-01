import React from 'react'
import "./navbar.scss"
import Img1 from "../../asset/Group.jpg";
import Img from "../../asset/image 4.png";
import Img2 from "../../asset/Vectors.png";
export default function navbar() {
  return (
  <nav>
<div className='icons'>
<img alt="picOne" src={Img1} style={{height:"25px"}} />
</div>
<div className='searchbar'>
  <input type="search" placeholder='search for anything'  />
</div>
<div >
  <ul className='link'>
    <li>
      <a href="/#">Doc</a>
    </li>
    <li>
      <a href="/"><img src={Img2} alt="one" /></a>
    </li>
    <li>
    <a href="/"><img src={Img} alt="" className='icons' /></a>
    </li>
    <li>
    <a href="/">osazee</a>
    </li>
  </ul>
</div>

    </nav>
  )
}
