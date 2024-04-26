import React,{useContext} from 'react'
import { globalContext } from './App'
 function Profile() {
    const contextvalue= useContext(globalContext)
  return (
    <div>
       <h1>Profilecomponent</h1>
       <p>value ={contextvalue}</p>
       <profile/>
        </div>
  )
}
export default Profile;