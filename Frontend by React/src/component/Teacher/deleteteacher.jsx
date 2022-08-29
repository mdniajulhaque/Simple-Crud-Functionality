import React, {useState} from "react";
import Button from "../buttoncomponent";

function DeleteTeacher(){
    let data = ''
    const [userid, setuserid] = useState();
    const [launch, setlaunch] = useState(0);
    const [formOpen,setformOpen] = useState(false);
    const [flag,setflag] = useState(false);
    const endpoint = "http://localhost:3000/graphql";
    console.log(launch)
    const query = `
    mutation DeleteTeacherbyid($postId: teacherid!) {
        deleteTeacherbyid(postId: $postId) {
          username
          age
          address
        }
      }
    `;
  const inputsend =  { 

        "postId": {
          "id": userid
        }
      }
  
  const deleteUser = (event)=>{
    event.preventDefault();
    setflag(true)
    fetch(endpoint, {
      method: 'POST',
      headers: { "Content-Type": "application/json",
                  "Accept":"application/json",
     },
      body: JSON.stringify({ query:query, variables: inputsend })
    }).then(Response=>Response.json())
    .then(data => setlaunch(data.data.deleteTeacherbyid))

}


return (
  <>
    <div> 
        <br />
     {/* <button type="button" onClick={()=> setformOpen(true)}>Save user</button>*/}
     <Button classname="btn btn-primary center" bname="Delete Teacher" onClick={()=> setformOpen(true)}    />
     {
          formOpen &&  <div>
            <form onSubmit={ deleteUser}>
              <label>
                User ID: <br />
                <input type="text"  onChange={(event) => {
                  setuserid(event.target.value);
                }}  />
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
export default DeleteTeacher;