import React from "react";
import { BrowserRouter, Route, Routes ,Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Product";
import Contact from "./Contact";
import Login from "./Login";
// import Login from './Login'
function App(){
  return (
    <>
  <BrowserRouter>
  <div id="navbar">
  <Link className="tag" to = "/"> Home</Link>
  <Link className="tag" to = "/About">About</Link>
  <Link className="tag" to = '/products'>Products</Link>
  <Link  className="tag" to = '/contact'>Contact</Link>
  <Link className="tag" to='/Login'>Login</Link>
  {/* <Link className="tag" to='/login' >Login</Link> */}
  </div>
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/about' element = {<About/>} />
    <Route path= '/products' element = {<Products/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path= '/login' element = {<Login/>} />
    {/* <Route path="/login" element= {<Login/>}/> */}
    <Route path='*' element= {<h1>404 page not found</h1>}  />
  </Routes>
  </BrowserRouter>
    </>
  )
}
export default App;