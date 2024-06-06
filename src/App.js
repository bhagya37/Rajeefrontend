// import React, { useState }  from "react";
// import { BrowserRouter, Route, Routes , NavLink} from "react-router-dom";
// import Home from "./Home";
// import About from './About'
// import JoinUs from './JoinUs'
// import Contact from './Contact'
// import Singup from './Singup'
// import DetailsCard from "./DetailsCard";
// import './App.css'
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import Pagination from "./Pagination";

// function App(){
//     const [menuOpen , setMenuOpen] = useState (false)
//     return(
//         <>
//         <BrowserRouter>

//         <div id="navbar" className= {menuOpen ? "open" : ""}> 
//            <div className="menu" onClick={()=>{
//             setMenuOpen(!menuOpen);
//            }}>
//            <span></span>
//            <span></span>
//            <span></span>
//            </div>
//         <NavLink className="tag"   to='/'  >Home</NavLink>
//          <NavLink className="tag" to='/About'  >About</NavLink>
//          <NavLink className="tag" to='/JoinUS'  >JoinUs</NavLink>
//          <NavLink  className="tag" to='/Contact'  >Contact</NavLink>
//          <NavLink className="tag" to='/Login' >Login</NavLink>
//         </div>

//         <Routes>
//             <Route path = '/'  element={<Home/>}/>
//             <Route path='/About' element= {<About/>}  />
//             <Route path='/Joinus' element={<JoinUs/>}  />
//             <Route path='/Contact' element={<Contact/>}  />
//             <Route  path='/Singup' element={<Singup/>}/>
//             <Route path="/Login" element={<Login/>}/>
//             <Route  path='/Dashboard' element={<Dashboard/>}/>
//             <Route path="/courses/:id" element={<DetailsCard/>}/>
//             <Route path="/Pagination" element={<Pagination/>}/>  
//         </Routes>
//         </BrowserRouter>
//        </>
//     )
// }
// export default App;

import React, { useState }  from "react";
import { BrowserRouter, Route, Routes , NavLink} from "react-router-dom";
import Home from "./Home";
import About from './About'
import JoinUs from './JoinUs'
import Contact from './Contact'
import Singup from './Singup'
import DetailsCard from "./DetailsCard";
import './App.css'
import Login from "./Login";
import Dashboard from "./Dashboard";
import Pagination from "./Pagination";

function App(){
    const [menuOpen , setMenuOpen] = useState(false);

    return(
        <>
        <BrowserRouter>
            <div id="navbar" className={menuOpen ? "open" : ""}> 
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="nav-icon"></span>
                    <span className="nav-icon"></span>
                    <span className="nav-icon"></span>
                </div>
                <NavLink className="tag" to='/'>Home</NavLink>
                <NavLink className="tag" to='/About'>About</NavLink>
                <NavLink className="tag" to='/JoinUS'>Join Us</NavLink>
                <NavLink className="tag" to='/Contact'>Contact</NavLink>
                <NavLink className="tag" to='/Login'>Login</NavLink>
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Joinus' element={<JoinUs />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Singup' element={<Singup />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/courses/:id' element={<DetailsCard />} />
                <Route path='/Pagination' element={<Pagination />} />
            </Routes>
        </BrowserRouter>
       </>
    )
}
export default App;
