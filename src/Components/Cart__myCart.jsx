import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
function Cartmycart(){
let navigate=useNavigate()

    const [cartItems, setCartItems] = useState([])
    const [products, setProducts] = useState([])

    const fetchData=async ()=>{
        try{
            let res=await axios.get("https://66530479813d78e6d6d6e497.mockapi.io/products")
            setProducts(res.data)
            console.log(products)
        }
        catch(err){
            console.log(err)

        }
    }

    const removeCartItem = (id) => {
        setCartItems(cartItems.filter(citem => citem.id !== id))
        localStorage.setItem("products", JSON.stringify(cartItems))
    }
    useEffect(() => {
        fetchData()
        setCartItems(JSON.parse(localStorage.getItem("products")) ?? [])
    }, [])


    if(products) return(
        <div className="cartmycart">
    <div className="Cart_container">
    <div className="header">
                <h1>MyCart</h1>
            </div>
            <div className="content">
                <div className="cartItems">
                    {cartItems.map(item => (
                    <div key={item.name} className="cartItem">
                        <div className="cartItem__name">{products.filter(product => product.id === item.id.toString())[0]?.name}</div>
                        <div className="cartItem__count">{item.count}</div>
                        <div className="cartItem__price">{products.filter(product => product.id === item.id.toString())[0]?.price}</div>
                        <button onClick={() => {removeCartItem(item.id)}} className="cartItem__remove">x</button>
                    </div>
                    ))}
                    
                </div>
                <div className="cartActions">
                <button className="next" onClick={()=>{
                    navigate("/Mycart/personaldetails")
                }}> 
                next
                </button>
                <button className="next" onClick={()=>{
                    setCartItems([])
                    localStorage.setItem("products", "[]")
                }}> 
                Remove all items
                </button>
                </div>
                
            </div>

    </div>
    </div>
    )
}
export default Cartmycart;