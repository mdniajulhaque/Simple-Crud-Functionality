import React, {useState} from "react";
//import './App.css';
//import Button from "./component/buttoncomponent";
const endpoint = "http://localhost:3000/graphql";
const query = `
  {
    getAllTeachers {
      username
      age
      address
    }
  }
`;

function ReadTeacher(){
  let data='';
const [launch, setlaunch] = useState([]);

React.useEffect(() => {

      fetch(endpoint, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ query})
     }).then(Response=>Response.json())
     .then(data => setlaunch(data.data.getAllTeachers) )},[]);

     //const myObj = JSON.parse(data);
     //console.log(myObj);

return (
   <div> 
    {/*
    <button  type="button" className="btn btn-primary center"  onClick={handleChangecolor} name='button'>Click Me</button> 
*/}
    <div >
      <h1>Teacher</h1>
      <table className="table">
 <tr>
    <th>Teacher Name</th>
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
      <h1> {data} </h1>
    </div>
 </div>
)
}
export default ReadTeacher;