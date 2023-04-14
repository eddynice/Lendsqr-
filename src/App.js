
import Navbar from "./component/navbar/navbar";

import './App.scss';

import Main from "./component/mainPage/main/user";
import Sidebar from "./component/Dashboard/sidebar";
import Table from "./component/Dashboard/card"
function App() {





  return (
    <div className="App">
    
       <Navbar/>
     <Sidebar/>
      <Main/>
      <Table/>
       
    </div>
  );
}

export default App;
