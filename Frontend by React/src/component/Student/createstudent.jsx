import React, {useState} from "react";
import Button from "../buttoncomponent";
function CreateStudent(){
    let data = ''
    const [username, setusername] = useState();
    const [age, setage] = useState(55);
    const [address, setaddress] = useState();
    const [launch, setlaunch] = useState(0);
    const [formOpen,setformOpen] = useState(false);
    const [flag,setflag] = useState(false);
    var a = age
    a = parseInt(a)
    const endpoint = "http://localhost:3000/graphql";
    const query = `
    mutation CreateStudent($input: CreatestudentInput!) {
        createStudent(input: $input) {
          username
          age
          address
        }
      }
    `;
  const inputsend =  { "input": {
    "username": username,
    "age": a,
    "address": address
  }  }
  
  const saveUser = (event)=>{
    event.preventDefault();
    setflag(true);
  fetch(endpoint, {
      method: 'POST',
      headers: { "Content-Type": "application/json",
                  "Accept":"application/json",
     },
      body: JSON.stringify({ query:query, variables: inputsend })
   }).then(Response=>Response.json())
    .then(data => setlaunch(data.data.createStudent) )
}
return (
  <>
    <div> 
     {/* <button type="button" onClick={()=> setformOpen(true)}>Save user</button>*/}
     <br />
     <Button classname="btn btn-primary center" bname="Create Student" onClick={()=> setformOpen(true)}    />
     {
          formOpen &&  <div>
            <form onSubmit={saveUser}>
              <label>
                Student Name: <br />
                <input type="text"  onChange={(event) => {
                  setusername(event.target.value);
                }}  />
              </label><br />
              <label> 
                Age: <br />
                <input type="number" onChange={(event) => {
                  setage(event.target.value);
                }}  />
              </label><br />
              <label> 
                Address: <br />
                <input type="text" onChange={(event) => {
                  setaddress(event.target.value);
                }}    />
              </label><br /> <br />
              <button type="submit" value="Submit">Submit</button>
             </form> 
           </div>
            }
         {flag &&
           <div>
           <h1>Teacher</h1>
   <table className="table">
<tr>
 <th>Student Name</th>
 <th>Age</th>
 <th>Address</th>
</tr>
<tr>
 <th>{launch.username}</th>
 <th>{launch.age}</th>
 <th>{launch.address}</th>
</tr>
      </table>
         </div>
         }
          </div>
 </>
)
}
export default CreateStudent;