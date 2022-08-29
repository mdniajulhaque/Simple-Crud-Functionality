import React, {useState} from "react";
import Button from "../buttoncomponent";
//import './App.css';
//import Button from "./component/buttoncomponent";
const endpoint = "http://localhost:3000/graphql";
const FILMS_QUERY = `
  {
    getAllStudent {
        username
        age
        address
      }
  }
`;

function ReadStudent(){
  let data='';
const [launch, setlaunch] = useState([]);
const [colors, setColors] = useState(false);
function handleChangecolors (event)  {
  event.preventDefault();
  if(!colors){
  event.target.className = "btn btn-warning center ";
  setColors(true);
  }
  else{
  event.target.className = "btn btn-primary center";
  setColors(false);
}

console.log("Clicked");
   };

React.useEffect(() => {
  fetch(endpoint, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ query: FILMS_QUERY })
     }).then(Response=>Response.json())
     .then(data => setlaunch(data.data.getAllStudent) )},[]);

return (
   <div> 
    {/*
    <button  type="button" className="btn btn-primary center"  onClick={handleChangecolor} name='button'>Click Me</button> 
*/} <br /> 
      <Button classname="btn btn-primary center" bname="Click Here To See Student's Info" onClick={handleChangecolors}    />
    {colors &&  
    <div >
      <h1>Student</h1>
      <table className="table">
 <tr>
    <th>Student Name</th>
    <th>Age</th>
    <th>Address</th>
  </tr>
    {
    launch.map((fdata) =>(
                <tr>
    <th>{fdata.username}</th>
    <th>{fdata.age}</th>
    <th>{fdata.address}</th>
  </tr>
            ) )
        }

</table>
    </div> }
 </div>
)
}
export default ReadStudent;