import React from 'react'
import Sidebar from  "./sidebar"
import Card from  "./card"
import './dash.scss'
import PaginationBasic from "../pagination/page"
import Table from "../Table";
//import Modal from "react-modal"
import { fetchPost } from '../../data';
import { useState } from 'react';


 function Index({items}) {
 // const [modalOpen, setModal] =useState(false)
 // const [search, setSearch] =useState(false)
  return (
    <div>
<Sidebar/>

    <div className='main'>
      
  <Card/>
   <div className='section2'>

   <table className="my-table">
        <thead>
          <tr>
            <th>ORGANISATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
            <th>edit
            </th>
          </tr>
        </thead>
        <tbody>
   {fetchPost.map(item => {
            return (
              <tr>
              <td>{item.orgName}</td>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.createdAt}</td>
             
               <td><button >status</button></td> 
                
                <Table/>
            </tr>
   );
  })}
</tbody>
</table>
<PaginationBasic items={items} />
   </div>
    </div>
    </div>
  )
}
export default Index
