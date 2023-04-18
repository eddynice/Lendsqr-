import Modal from 'react-modal';
import { useState } from 'react';
const customStyles = {
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Modals = ()=>{
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
             <h2 >Hello</h2>
             
          <button onClick={isClose}>close</button>
          <div>I am a modal</div>
        </Modal>

        </div>
    )
}
export default Modals