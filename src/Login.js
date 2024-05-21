// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css'; 

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/epankaj/v.0/users/login', formData);
//       console.log(response.data);
     
//     } catch (error) {
//       console.error(error);
     
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import './Login.css';
import axios from "axios";
function Login(){
    let[formData,setFormData] = useState({
        email : '',
        password: ''
    })
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
     
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("http://3.111.37.163:8080/epankaj/v.0/users/save" , formData);
            console.log(response.data)
        }catch(error){
        console.log(error)
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