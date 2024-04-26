import React , {useState,useEffect} from "react";
import axios from "axios";
import './App.css'
function App (){
  let [productData ,setProductData] = useState ({
    products :[ ]
  })
  let [productName,setProductName] =useState ("") 
  let [filteredProducts , setFilteredProducts] = useState([ ])


  useEffect(() => {
    console.log("productName useEffect");
    const filtered = productData.products.filter((item, index) => 
    item.title.toLowerCase().includes(productName.toLowerCase()) 
     )
     setFilteredProducts(filtered);
    }, [productName, productData.products]);
  
    useEffect ( ()=>{
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
setProductData({products: res.data})
  })
  .catch((err)=>{
    console.log("product fetching data error")
  })
},[])
return (
  < >
  <div id="header">
    <h1>Products</h1>
    <input placeholder="Search prouducts" 
    value = {productName}
    onChange={(e)=>{
     setProductName(e.target.value)
    }}/>
  </div>
  <div id="container" >
  {
  filteredProducts.map((product,index)=>{
     return ( 
     <div key={index} className="product-details">
      <img className="img"  src={product.image} alt= {product.title} />
     <p> Category: {product.category} </p>
     <p> Title: {product.title} </p>
     <p> Price:<b>{product.price}$</b> </p>
     <p> Rating:<b>{product.rating.rate}/5</b> </p>
    </div>
    )
    })
  }
  </div>
  
  </>
)
}

export default App;



