import React,{useState,useEffect} from 'react'
import './Profile.css'
import { BiUser } from 'react-icons/bi';
import axios from 'axios';
function Profile(){
//   let[user,setUser] = useState('')
  useEffect(()=>{
axios.get("http://51.20.51.98:8080/epankaj/v.0/users/id/1")
.then((res)=>{
  console.log(res.data)
}).catch((err)=>{
  console.log("err")
})
  },[])
  return(
 <>
 <div id='profile-container'>
  <div className='header'><h1>Profile</h1></div>
  <div className='user-details'>
  <BiUser className='user-icon'/>
  <h3>Web devloper</h3>
  <div className='course-details'>
   <p className='data'>Html</p>
   <p className='data'>Css</p>
   <p className='data'>Bootstrap</p>
   <p className='data'>JavaScript</p>
   <p className='data'>React Js</p>
  </div>
  </div>
 </div>
 </>
  )
}

export default Profile;