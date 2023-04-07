import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {fetchPost} from "../../data"


const PaginationBasic =()=>{
const [items, setItem] = useState([])
  let active = 2;

for (let number = 1; number <= 10; number++) {
  fetchPost.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return(
    <div>


    <Pagination size="sm">{items}</Pagination>
    </div>
  )
}


export default PaginationBasic;