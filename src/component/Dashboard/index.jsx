import React, { useMemo } from 'react'
import Sidebar from  "./sidebar"
import Card from  "./card"
import './dash.scss'
import Table from "../Table"

 function Index() {
  const data = useMemo(
    () => [
      {
       organisation:"blind", 
        username: "John Doe",
        
        email: "john.doe@example.com",
      },
      {
        organisation: "Jane Smith",
        username: 28,
        email: "jane.smith@example.com",
      },
      {
        name: "Bob Johnson",
        age: 42,
        email: "bob.johnson@example.com",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Organisation",
        accessor: "organisation",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
       accessor: "email",
      }, 
      {
        Header: "Phone Numer",
       accessor: "Phone Number",
      }, 
      {
        Header: "Date Joined",
       accessor: "Date Joined",
      }, 
      {
        Header: "Status",
       accessor: "Status",
      }, 
      
       
    ],
    []
  );




  return (

    <div>



<Sidebar/>

    <div className='main'>
      
  <Card/>

   <div className='section2'>
   <Table data={data} columns={columns} />
   </div>
    </div>


    </div>
  )
}
export default Index
