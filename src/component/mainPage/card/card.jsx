import React from 'react'
import "./card.scss"
import img from "../../../asset/Vector (1).png";
import img2 from "../../../asset/Vector (2).png";
import img3 from "../../../asset/Vector (10).png";
import img4 from "../../../asset/Vector (14).png";

const data =[{
  icon:img,
  user:"Users",
  number:"2450"
},
{
  icon:img2,
  user:"Active Users",
  number:"2450"
},
{
  icon:img3,
  user:"User With Loans",
  number:"12,450"
},
{
  icon:img4,
  user:"User With Savings",
  number:"102,450"
}
]
export default function card() {
  return (
    <div className='card'>
    <h3>Users</h3> 
    <div className='section1'>
    {data.map((datas=>(
       <div className='box'>
        <div className='icon-container'>
        <img src={datas.icon} alt="" className='icon' />
        </div>
      
       <p>{datas.user}</p>
       <h3>{datas.number}</h3>
      </div>

    )))}
    
   
    
    </div>
    </div>
  )
}

