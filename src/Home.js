

import React from "react"
export function Home({name , age}){
  console.log(name,age);
   return(
     <>
     <h2>Home component</h2>
     Name:{name}  ,
     Age : {age} 
   </>
   )
 }