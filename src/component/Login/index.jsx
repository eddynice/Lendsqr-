import "./login.scss"
import Img from "../../asset/pablo.png"
import Img1 from "../../asset/Group.jpg"

export default function login() {
  return (
   
    <div className="contain">
     
    
      
    <div className='login'>
   
      <div className='left'>
         <div className="navbar">
      <img alt="picOne" src={Img1}  title="myNmae"/>
      </div>
     
     
        <img src={Img} alt="" />
        
      </div>
      <div className='right'>
        <h1>Welcome!</h1>
        <p>Enter details to login </p>
                <div className="text">
                    <input type="text" name="" placeholder="Email"/>
                </div>
                <div className="password">
                    <input type="password" name="" id="" placeholder="password" />
                </div>
                <a href="./" className="achor">Forget Password</a>
                <div className="submit">
                 
                    <input type="submit" value="Login" />
                </div>
                
      </div>
     
    </div>
    </div>
  )
}

