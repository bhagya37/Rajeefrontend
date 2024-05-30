import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { Link } from "react-router-dom";


function Singup() {
    let [formData,setFormData] = useState ({
        name: '',
        email: '',
        password:''
    })
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const handleChange = (e)=>{
      setFormData({...formData , [e.target.name]: e.target.value})
    }
    const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.post("http://3.111.37.163:8080/epankaj/v.0/users/save" , formData);
        console.log(response.data);
    } catch(error){
        console.log(error);
    }
    }
  
    return (
        <>
            <form id="signup-form" onSubmit={handleSubmit}>
            <h1 className="head">SingUp</h1>
            { signUpSuccess ? (
        <div>
          <p>Sign up successful!</p>
          <Link to="/Login" className="btn">
            Login
          </Link>
        </div>
      ) :
                <div id="signup-container">
                     <div className="input-field">
                        <input className="input" placeholder="enter name" type="text"
                         id="name" 
                         name="name"
                          value={formData.name}
                           required 
                           onChange={handleChange}/>
                        <input className="input" placeholder="Enter email" type="text" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        required 
                        onChange={handleChange}/><br />
                        <input className="input" placeholder="Password" type="password" 
                        id="email" name="password"
                         value={formData.password} 
                         required
                          onChange={handleChange}/>
                    </div>
                </div>
          }
                <button className="btnlog" type="submit">SingUp</button>
            
            </form>
            {/* <div className="logindiv">
            <h1>If Already Have Account?</h1>
           <Link to="/Login"> <button className="btnlog" type="submit">Login</button></Link>
            </div> */}
           
        </>
    );
}

export default Singup;
