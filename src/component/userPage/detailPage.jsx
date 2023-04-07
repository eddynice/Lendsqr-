
import {fetchPost} from "../../data"
import {  useParams,Link } from 'react-router-dom';
const DetailPage = ({datas})=>{
  
  let { id } = useParams();

  
    return (
      <>
      {fetchPost.filter(profile => profile.id === id).map((item,i) => 
                  <div key={i} className="discover_device col-4">
                    <div className="box h-100">
                    <p>{item.profile.firstName}</p>
                    <p>{item.email}</p>
                   
                    <Link to={`/`} className='btn btn-primary col-4'>Back</Link>
                    </div>
                  </div>
                )}
      </>
       
    ) 



}
export default DetailPage