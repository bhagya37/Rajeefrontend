
import React, { useState } from "react";
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    let[formData,setFormData] = useState({
        email : '',
        password: ''
    })
    const [error ,setError] = useState('')
    const navigate = useNavigate();
    const authToken  = null ;


    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
     
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("http://3.111.37.163:8080/epankaj/v.0/users/save" , formData);
            // console.log(response.data)
            const {token} = response.data;
            localStorage.setItem('token' , authToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            navigate("/Dashboard")
        }catch(error){
        console.log(error);
        setError('Invalid credentials')
        }
    }
    return(
        <>

        <form onSubmit={handleSubmit}>
        
            <div className="login-container">
            
              <div className="input-login">  
              <div className="log-head"> <h1>Login</h1></div>
                <input  className="login-input" type="text" placeholder="enter email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange} 
                required/> <br/>
                <input className="login-input" type="text" placeholder="enter password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}/>
                </div>
            </div>
            <button className="btnlog">Login</button>
        </form>
        </>
    )
}
export default Login;

