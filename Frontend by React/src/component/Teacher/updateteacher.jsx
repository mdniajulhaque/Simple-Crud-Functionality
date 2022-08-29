import React, {useState} from "react";
import Button from "../buttoncomponent";

function UpdateTeacher(){
    let data = ''
    const [userid, setuserid] = useState();
    const [username, setusername] = useState();
    const [age, setage] = useState(55);
    const [address, setaddress] = useState();
    const [launch, setlaunch] = useState(0);
    const [formOpen,setformOpen] = useState(false);
    const [flag,setflag] = useState(false);
    let a = age
    a = parseInt(a)
    const endpoint = "http://localhost:3000/graphql";
    const query = `
    mutation UpdateTeacher($updateteacher: UpdateteacherInput!) {
        updateTeacher(updateteacher: $updateteacher) {
          username
          age
          address
        }
      }
    `;
  const inputsend = 
    {
        "updateteacher": {
          "id": userid,
          "username": username,
          "age": a,
          "address": address
        }
      }

  
  const updateTeacher = (event)=>{
    event.preventDefault();
    setflag(true);
    fetch(endpoint, {
      method: 'POST',
      headers: { "Content-Type": "application/json",
                  "Accept":"application/json",
     },
      body: JSON.stringify({ query:query, variables: inputsend })
    }).then(Response=>Response.json())
    .then(data => setlaunch(data.data.updateTeacher) )
}


return (
  <>
    <div> 
     {/* <button type="button" onClick={()=> setformOpen(true)}>Save user</button>*/}
     <br />
     <Button classname="btn btn-primary center" bname="Update Teacher" onClick={()=> setformOpen(true)}    />
     {
          formOpen &&  <div>

            <form onSubmit={updateTeacher}>
            <label>
                Teacher ID: <br />
                <input type="text"  onChange={(event) => {
                  setuserid(event.target.value);
                }}  />
              </label><br />
              <label>
                Teacher Name: <br />
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
              <input type="submit" value="Submit" />
              
            </form> 
            </div>
            }
            {flag &&
           <div>
           <h1>Teacher</h1>
   <table className="table">
<tr>
 <th>Teacher Name</th>
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
export default UpdateTeacher;