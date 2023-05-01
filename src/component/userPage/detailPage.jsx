import Button from 'react-bootstrap/Button';
import "./details.scss"
import Img from "../../asset/Vector (18).png"
import {fetchPost} from "../../data"
import {useParams,Link} from 'react-router-dom';
import Sidebar from '../Dashboard/sidebar';
import Navbar from '../navbar/navbar';
console.log(fetchPost)
const DetailPage = ()=>{
  
  let { id } = useParams();
 
    return (
      <>
    <Navbar/>
      <div className='detailcontainer'>
        <div><Sidebar/></div>
        <div className='detailMain' >
        {fetchPost.filter(profile => profile.id === id).map((item,i) => 
                  <div key={i} className="detail">
                    <div  className="heading">
                    <div className='one'>
                     <Link to={`/`} className='btn light col-4'> --- Back To Users</Link>
                     <h2>User Details</h2>
                     </div>
        
       <div className='button'>
        <Button variant="outline-danger">blacklist user</Button>
        <Button variant="outline-primary">Primary</Button></div>
       
                </div> 

                <div className='box'>
                  <div className='details'>
                  <div className='image'>
                    <img src={Img} className='iconss' alt="oooo"/>
                  </div>
                  <div>
                    <h2>{item.profile.firstName} {item.profile.lastName}</h2>
                    <p>{item.accountNumber
}</p>
                  </div>
                  <div> <p>|user'tier|</p></div>
                  <div> <h2> #{item.accountBalance}</h2></div>
               
                  </div>
                  <div className='Details-footer'>
                    <Link>General Details </Link>
                    <Link>Document </Link>
                    <Link>Bank Details</Link>
                    <Link>Loans </Link>
                    <Link>Service </Link>
                    <Link>App and Systems </Link>
                  </div>

                </div>
                <div className="profile">
                  
                <h3>Personal Informations</h3> 
    <table>
    
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Bvn</th>
          <th>gender</th>
          <th>marital Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.profile.firstName} {item.profile.lastName}</td>
          <td>+234{item.profile.phoneNumber.replace(/\D/g,'').substr(1)}</td>
       

       <td>{item.profile.address}</td>
       <td>{item.profile.bvn}</td>
       <td>{item.profile.gender}</td>
       <td>{item.profile.currency}</td>
        </tr>
       
      </tbody>
      </table>
      <h3>Education and Employment</h3>
       <table>
       
      <thead>
      
        <tr>
          <th>Level</th>
          <th>employment Status</th>
          <th>sector</th>
          <th>duration</th>
          <th>office Email</th>
          <th>monthly  Income</th>
          <th>loan  Repaymente</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.education.level}</td>
          <td>{item.education.employmentStatus}</td>
       <td>{item.education.sector}</td>

       <td>{item.education.duration}</td>
       <td>{item.education.officeEmail}</td>
       <td>{item.education.monthlyIncome}</td>
       <td>{item.education.loanRepayment.replace(/\D/g,'').substr(1)}</td>
      
        </tr>

      </tbody>
    </table>

<h3>Socials </h3> 
    <table>
    
      <thead>
        <tr>
          <th>Facebook</th>
          <th>Instagram</th>
          <th>witter</th>
        
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.socials.facebook}</td>
          <td>{item.socials.instagram}</td>
       <td>{item.socials.twitter}</td>
        </tr>

      </tbody>
    </table>
 <h3>Guarator </h3> 
    <table>
    
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Address</th>
           <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.guarantor.firstName} {item.guarantor.lastName}</td>
          <td>{item.guarantor.phoneNumber}</td>
       <td>{item.guarantor.address}</td>
<td>{item.guarantor.gender}</td>
        </tr>

      </tbody>
    </table>
           </div>  
           </div>
                 
                )}
        </div>
      </div>
      
     
      </>
       
    ) 
}
export default DetailPage