import React from 'react'
import Modal from "../../modal/modal";
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
export default function Table({ datas}) {

  const navigate =useNavigate()

 const Callback = () => {
    navigate(`detail/${datas.id}`)
  }

  return (
    <tbody >
    <tr>
              <td>{datas.orgName}</td>
              <td onClick={Callback}  datas={datas} className='tableName'>{datas.userName}</td>
              <td>{datas.email}</td>
              <td>080{datas.phoneNumber.replace(/\D/g,'').substr(1)}</td>
              <td>{moment(datas.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
              <td>
              <button className={!datas.lastActiveDate ? "red":"blue"
}></button>
               </td> 
               <td>
                <Modal/>
              </td>
              </tr>
            </tbody>
  )
}
