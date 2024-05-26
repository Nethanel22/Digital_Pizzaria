import axios from "axios"
import { useEffect } from "react"

function Finish(){

    const applyOrder = async () => {
        await axios.post("https://66530479813d78e6d6d6e497.mockapi.io/orders", {
            orderDate: new Date(),
            phone: localStorage.getItem("phone"),
            products: JSON.parse(localStorage.getItem("products"))
        })
        localStorage.setItem("products", JSON.stringify([]))
        
    }
    useEffect(() => {
        applyOrder()
    }, [])
    return(
        <div className="finish-container">
            <div className="finsh-message">
                <h2>Finished</h2>
            </div>
        </div>
    )
}
export default Finish