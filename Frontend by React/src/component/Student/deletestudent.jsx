import React, {useState} from "react";
import Button from "../buttoncomponent";

function DeleteStudent(){
    let data = ''
    const [studentid, setstudentid] = useState();
    const [launch, setlaunch] = useState(0);
    const [formOpen,setformOpen] = useState(false);
    const [flag,setflag] = useState(false);
    const endpoint = "http://localhost:3000/graphql";
    const query = `
    mutation DeleteStudentbyid($postId: studentid!) {
        deleteStudentbyid(postId: $postId) {
          username
          age
          address
        }
      }
    `;
  const inputsend =  { 

        "postId": {
          "id": studentid
        }
      }
  
  const deleteStudent = (event)=>{
   
   event.preventDefault();
    setflag(true);


    fetch(endpoint, {
      method: 'POST',
      headers: { "Content-Type": "application/json",
                  "Accept":"application/json",
     },
      body: JSON.stringify({ query:query, variables: inputsend })
    }).then(Response=>Response.json())
    .then(data => setlaunch(data.data.deleteStudentbyid) )

    
}

return (

  <>
    <div> 
        <br />
     {/* <button type="button" onClick={()=> setformOpen(true)}>Save user</button>*/}
     <Button classname="btn btn-primary center" bname="Delete Student" onClick={()=> setformOpen(true)}    />
     {
          formOpen &&  <div>
            <form onSubmit={deleteStudent}>
              <label>
                Student ID: <br />
                <input type="text"  onChange={(event) => {
                  setstudentid(event.target.value);
                }}  />
              </label><br /> <br />
             
              <button type="submit" value="Submit">Delete</button>
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
export default DeleteStudent;