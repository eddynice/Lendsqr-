import {useState,useEffect} from "react"
import Card from "../card/card";
import Table from "../table/table"
import { fetchPost } from "../../../data";
import Sidebar from "../../Dashboard/sidebar"
import "../table/table.scss";
import "./user.scss";


export default function Main(props) {
  const [data, setData] = useState([])
  
  
 

useEffect(() => {
    setData([...fetchPost]);
    }, []);

    

  return (
    <>
    
<Sidebar/>
<div className='main'>
      <Card  />
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
        
        {data.map(datas=>(
  
  <Table key={datas.id} datas={datas} 
   />
 )

 )}
           
</table>



    </div>
    </>
  )
}
