import React, { useState } from "react";
import "./DrropDown.css"
import { list } from "./src/listQus";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoCaretUpSharp } from "react-icons/io5";




function DropDown({ Qustion, Answer }) {
  let [toggleText, setToggleText] = useState(false);
  let updateText = () => {
    toggleText ? setToggleText(false) : setToggleText(true);
  };

  return (
   <div className="center">
     <div className="main-drop">
      <div className="content">
        <div className="qustion-part"> 
        <p>{Qustion}</p> 
        </div>
       
       <div>
       <button onClick={updateText}> {!toggleText?<IoCaretDownSharp />:<IoCaretUpSharp />}</button>
      {toggleText && <div> {Answer}</div> }
       </div>
      
      </div>

    

</div>
   </div>
  );
}

export default DropDown;

