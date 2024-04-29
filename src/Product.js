import React, {useState,useEffect} from "react";
import axios from "axios";
 import './App.css'
function Products(){
  let [productData,setProductData]=useState({
    products:[]
  })
  let [productName,setProductName] = useState("")
  let [filteredProducts,setFilteredProducts] = useState([])


useEffect (()=>{
  const filtered = productData.products.filter((item)=>
    item.title.toLowerCase().includes(productName.toLowerCase())
   )
setFilteredProducts(filtered);

},[productName , productData.products])

  useEffect (()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setProductData({products: res.data})
    })
  })
  return(
    <>
   
    <div id="header">
    <h1 id="head">PRODUCTS</h1>
    <input className="btn"  placeholder="Search product" 
    value={productName}
    onChange={(e)=>{
      setProductName(e.target.value)
    }}
    />

    </div>
    <div id="container">
    {
      filteredProducts.map((product,index)=>{
        return (
          
            <div className="product-details" key={index}>
            <img className= "img" src= {product.image} alt= {product.title} />
            <p>Category: {product.category} </p>
            <p> Title: {product.title} </p>
            <p> Price:<b>{product.price}</b>$ </p>
            <p>Rating:<b>{product.rating.rate} </b></p>
            </div>
          
        )
      })
    }
    </div>
    </>
  )
}
 export default Products;