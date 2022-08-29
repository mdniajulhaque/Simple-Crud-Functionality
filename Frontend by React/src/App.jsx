import React, {useState} from "react";
import './App.css';
import Button from "./component/buttoncomponent";
import ReadTeacher from "./component/Teacher/readteacherdata";

function App(){
const [color, setColor] = useState(false);

function handleChangecolor (event)  {
    event.preventDefault();
    if(!color){
    event.target.className = "btn btn-warning center ";
    setColor(true);
    }
    else{
    event.target.className = "btn btn-primary center";
    setColor(false);
  }

  console.log("Clicked");
     };
    

return (
   <div> 
    <br /><br />
    {/*
    <button  type="button" className="btn btn-primary center"  onClick={handleChangecolor} name='button'>Click Me</button> 
*/}
<Button classname="btn btn-primary center" bname="Click Here To See Teacher's Info" onClick={handleChangecolor}    />
    <br /> <br />
   
    {color && < ReadTeacher /> }
 </div>
)
}
export default App;