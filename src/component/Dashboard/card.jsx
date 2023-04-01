import React from 'react'
import "./card.scss"
import img from "../../asset/Vectors.png"

export default function card() {
  return (
    <div className='card'>
    <h1>Users</h1> 
    <div className='section1'>
    <div className='box'>
     <img src={img} alt="" />
     <h4>user</h4>
     <h2>number</h2>
    </div>
    <div className='box'>
     <p>icon</p>
     <h4>user</h4>
     <h2>number</h2>
    </div>
    <div className='box'>
     <p>icon</p>
     <h4>user</h4>
     <h2>number</h2>
    </div>
    <div className='box'>
     <p>icon</p>
     <h4>user</h4>
     <h2>number</h2>
    </div>
    </div>
    </div>
  )
}
