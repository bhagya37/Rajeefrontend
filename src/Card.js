import React from "react";
// import './Content.css'
import './Dashboard.css'
function Card(){
    const courses = [
        {
            title:"web Devlopment",
           image:"https://www.danielhonrade.com/wp-content/uploads/2020/09/Web-development-1.jpg"
        },
        {
            title:"Data Science",
            image:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg"
        },
        {
            title:"Devops",
            image:"https://wallpaperaccess.com/full/2648921.jpg"
        },
        
        
    ]
    return(
        <>
        <div className="card-container">
            {
                courses.map((item)=>{
                  return( <div className="card">
                        <div className="card-cover"><img src= {item.image} alt="title" width={"200px"} height={"150px"}/></div>
                        <div className="card-title">{item.title}</div>
                    </div>
                  )
                })
            
            }
        </div>
        </>
    )
}
export default Card;