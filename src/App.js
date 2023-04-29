
import Navbar from "./component/navbar/navbar";

import './App.scss';

import Main from "./component/mainPage/main/user";
import Sidebar from "./component/Dashboard/sidebar";
function App() {





  return (
 <div className="wrapper">
  <header><Navbar/>
  </header>

   <div className="container">
    
    
   
   <div className="man">
   <Main/>
   </div>

  
  
   </div>
 </div>
  );
}

export default App;
