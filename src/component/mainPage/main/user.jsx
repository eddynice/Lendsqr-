import {useState,useEffect} from "react"
import Card from "../card/card";
import Table from "../table/table"
import { fetchPost } from "../../../data";
//import Sidebar from "../../Dashboard/sidebar"
import "../table/table.scss";
import "./user.scss";
import Pagination from "../../pagination/page"
import icons from "../../../asset/Vector (4).png"


export default function Main() {
  const [data, setData] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('data'); 
    if (storedData) { 
      setData([...fetchPost]);
    } else {
     fetch([...fetchPost]) 
     .then(response => response.json())
      .then(data => {
         setData(data); 
        localStorage.setItem('data', JSON.stringify(data)); 
      }); 
  } },
   []);


   const filteredData = data.filter(item => item.email.toLowerCase().includes(searchQuery.toLowerCase()) );
 	    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

   const filterData =()=>{
    setCurrentPage(totalPages)
   }
 	     function handlePageChange(pageNumber) { 
 	     	setCurrentPage(pageNumber);
 	     	 }
 	     	  function handleSearch(event) {
 	 setSearchQuery(event.target.value);
 	  setCurrentPage(1); 
 	} 
  
  
  const startIndex = (currentPage - 1) * itemsPerPage;
 	 const endIndex = startIndex + itemsPerPage;
 	  const currentData = filteredData.slice(startIndex, endIndex);



    const img = [
      {
        img:icons
      }
    ]
    console.log(img)
    
  return (

    

<div className='main'>
      <Card  />
      <div className="userTable">
<table className="my-table">
{img.map((img=>(
<thead>
 
<tr>
            <th>ORGANISATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
            <th>
            </th>
          </tr>
        </thead>
  )))}
          
        
        {currentData.map(datas=>(
  
  <Table key={datas.id} datas={datas} 
   />
 )

 )}
           
</table>

<input type="text" value={searchQuery} onChange={handleSearch} />
<button onClick={filterData}>clicks</button>
<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} /> 
</div>


    </div>
  
  )
}
