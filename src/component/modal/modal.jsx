import Modal from 'react-modal';
import { useState } from 'react';
import "./modal.css"
const customStyles = {
  content : {
    top                   : '55%',
    left                  : '32%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Modals = ()=>{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [date, setDate] = useState(''); 
  const [phone, setPhone] = useState('');
   const [select1, setSelect1] = useState(''); 
   const [select2, setSelect2] = useState(''); 
   // Handle form submission 
   function handleSubmit(e) {
     e.preventDefault();
   }
      // Your filter logic goes here } 
      // Handle form reset 
      function handleReset() { 
       setUsername('');
        setEmail('');
         setDate('');
          setPhone(''); 
          setSelect1(''); 
          setSelect2(''); 
      }
const [modal, setmodal] = useState(false)

const isOpen=()=>{
    setmodal(!false)
}
const isClose=()=>{
    setmodal(false)
}
    return(
        <div>
             <button onClick={isOpen}>O</button>
        <Modal
          isOpen={modal}
          onAfterOpen={isOpen}
          onRequestClose={isClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
             <div class="container">
             <form onSubmit={handleSubmit}> 
             <label> Select Option 2: <select value={select2} onChange={(e) => setSelect2(e.target.value)}>
                         <option value="">--Please select an option--</option>
                          <option value="option1">Option 1</option> 
                          <option value="option2">Option 2</option> 
                          <option value="option3">Option 3</option>
                           </select> </label> 
            <label> Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> </label> 
            <label> Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> </label>
             <label> Date: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /> </label>
              <label> Phone: <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
               </label> <label> Select Option 1: <select value={select1} onChange={(e) => setSelect1(e.target.value)}>
                 <option value="">--Please select an option--</option>
                  <option value="option1">Option 1</option>
                   <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                     </select> </label>
                     
                           
                           <div> <button type="reset" onClick={handleReset}>Reset</button> 
                           <button type="submit">Filter</button>
                            </div>
                             </form>
             </div>
             
         
         
        </Modal>

        </div>
    )
}
export default Modals