import React from 'react';
//import {Link} from "react-router-dom"
import "./sidebar.scss"
import Img from "../../asset/face.svg";

import Img4 from "../../asset/Union.png";
import Img5 from "../../asset/face.svg"
import Img6 from "../../asset/face.svg"
import Img7 from "../../asset/face.svg"
import Img8 from "../../asset/face.svg"


export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className='brand-flex'>
        <span className='brand-icons'>
          
          
          
        </span>
      <div className='switch'>
        <select name="" id="" className='select'>
          <option value="">
            option one
          </option>
          <option value="">
            option one
          </option>
          <option value="">
            option one
          </option>
        </select>
         
        </div>
      </div>
      <div className='sidebar-main'>
       
        <div className='sidebar-menu'>
          <>
          <div className='menu-head'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Dashboard </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='h4'>
          <h4>Customer</h4>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">User </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Guarator </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Loans </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Decision Models</a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Saving </a> 
                </li>
              </ul>
            </div>
          </div>
         
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Loan Request </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">WhiteList </a> 
                </li>
              </ul>
            </div>
          </div>
          
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Karma </a> 
                </li>
              </ul>
            </div>
          </div>
          
          <div className='h4'>
          <h4>Business</h4>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Organisation </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Dashboard </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Dashboard </a> 
                </li>
              </ul>
            </div>
          </div>
          <div className='menu-heads'>
            <img src={Img} alt="" />
            <div>
              <ul>
                <li>
                   <a href="/">Dashboard </a> 
                </li>
              </ul>
            </div>
          </div>
         
          </>
         
        </div>
      </div>
     
      </div>
  )
}
