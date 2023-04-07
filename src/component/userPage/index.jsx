
//import { useState } from "react";
//import { useTable } from "react-table";
//import {fetchPost} from "../data.js"
//import img from "../asset/Vector (4).png"
//import "./table.css"
//import Stock from "./detail"

import { fetchPost } from "../../data";
console.log(fetchPost)

function Index({ data, columns }) {

  

  return (
    <table className="my-table" >
       <div>
 <div style={{ paddingLeft:' 3em',
  paddingRight:' 3em',
  marginTop: '3em'}} className="stock-container">{fetchPost.map((data, key) => {
          return (
            <div key={key}>
              {data.profile.firstName}
              <hr/>
              {data.profile.lastName}
              {data.profile.status}
              {data.profile.phoneNumber}
              
            
            </div>
          );
        })}</div>

    </div>
      
    </table>
  );
}
export default Index