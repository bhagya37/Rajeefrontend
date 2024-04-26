import React from "react";
function UserCard({username,email,city,phone}){
    return(
      <div id="user-card">
                  <p>Name:{username}</p>
                   <p>Email:{email}</p>
                  <p>Phone:{phone}</p>
                  <p>City:{city}</p> 
               </div>
               )
   }
   export default UserCard;