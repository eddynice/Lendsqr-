import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Table({ datas}) {
  
  const navigate =useNavigate()





 const Callback = () => {
    navigate(`detail/${datas.id}`)
  }
 
  
  return (
    <tbody >
    <tr >
      
              <td>{datas.orgName}</td>
              <td onClick={Callback}  datas={datas} className='tableName'>{datas.userName}</td>
              <td>{datas.email}</td>
              <td>{datas.phoneNumber}</td>
              <td>{datas.createdAt}</td>
              <td>
              <button>status</button>
               </td> 
               <td>
                <button  >onen</button>
              </td>
              
              </tr>
             
            </tbody>

  )
}
