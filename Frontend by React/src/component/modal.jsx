import React, {useState} from "react";
import Button from "./buttoncomponent";
import "./modal.css";

function Modal() {

    const [modalOpen, setModalOpen] = useState(false);
  
  return (
  <div>
     { /*  <button
        className="openModalBtn btn btn-success center"
        type="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
    </button> */}
      <Button classname="openModalBtn btn btn-success center" bname="Open" onClick={() => {
          setModalOpen(true);
        }} />
      
      
      
      {modalOpen &&
      <div className="modalContainer">
        <div className="titleCloseBtn">
         {/*} <button
            onClick={() => {
                setModalOpen(false);
            }}
          >
            X
        </button>  */}
          <Button classname="" bname="X" onClick={() => {
          setModalOpen(false);
        }} />
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
         {/* <button
            onClick={() => {
                setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button> */}
          <Button classname="" bname="Cancel" onClick={() => {
          setModalOpen(false);
        }} />
          <button>Continue</button>
        </div>
      </div>}
    </div>
  );
}

export default Modal;
