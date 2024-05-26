import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
function MyOrders(){
let navigate=useNavigate()

    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [phone, setPhone] = useState(localStorage.getItem('phone'))

    const fetchProducts = async ()=>{
        try{
            let res=await axios.get("https://66530479813d78e6d6d6e497.mockapi.io/products")
            setProducts(res.data)
            console.log(res.data)
        }
        catch(err){
            console.log(err)

        }
    }

    const fetchData=async ()=>{
        try{
            let res=await axios.get("https://66530479813d78e6d6d6e497.mockapi.io/orders")
            setOrders(res.data.filter(item => item.phone === phone))
            console.log(res.data)
        }
        catch(err){
            console.log(err)

        }
    }

    useEffect(() => {
        fetchData()
        fetchProducts()
    }, [])

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      

    const timeToArrive = (order) => {
        const date = new Date()
        return millisToMinutesAndSeconds(1800000 - Math.abs(date - Date.parse(order.orderDate))) 
    }

    
    if(orders !== []) return(
        <div className="cartmycart">
    <div className="Cart_container">
    <div className="header">
                <h1>My Orders</h1>
            </div>
            <div className="content">
                <div className="cartItems">
                {orders.map((order, i) => {
                    if(i< 5) return (
                        <div className="cartItem">
                        <div className="cartItem__name">{order?.products?.map(item => <p>{products.filter(p => p.id == item.id)[0]?.name}</p>)}</div>
                        <div className="cartItem__count">{timeToArrive(order)}</div>
                    </div>
                    )
                })}
                
                </div> 
            </div>

    </div>
    </div>
    )
}
export default MyOrders;