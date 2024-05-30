import React from "react";
// import './Sidebar.css'
import './Dashboard.css'
import { BiHome ,BiRegistered,BiLogoDiscourse,BiBookmarks, BiLogOut} from "react-icons/bi";
function Sidebar(){
    return(
        <>
        <div className="menu">
        <div className="menu-list">
            <a href="#" className="item" >
                <BiHome className="logo-icon"/>
                Dashboard
            </a>
            <a href="#" className="item">
                <BiRegistered className="logo-icon"/>
                Registered
            </a>
            <a href="#" className="item">
                <BiLogoDiscourse className="logo-icon"/>
               Courses
            </a>
            <a href="#" className="item" >
                <BiBookmarks className="logo-icon"/>
               Results
            </a>
            <a href="#" className="item">
                <BiLogOut className="logo-icon"/>
               Logout
            </a>
        </div>
        </div>
        </>
    )
}
export default Sidebar;