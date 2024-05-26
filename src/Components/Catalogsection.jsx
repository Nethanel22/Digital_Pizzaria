import CatalogItem from "./CatalogItem"
import {useState,useEffect} from "react"
import axios from "axios"
import Extraselector from "./ExtrasSelector"
import { useNavigate } from "react-router-dom"
function Catalogsection(){
    const [Pizza,setpizza]=useState()
    const[openmodal,setopenmodal]=useState({
        isopen:false,
        selectedId :0,
        name:"",
    })
    console.log(openmodal.selectedId)
let navigate=useNavigate()
    const fetchData=async ()=>{
        try{
            let res=await axios.get("https://66530479813d78e6d6d6e497.mockapi.io/products")
            setpizza(res.data)
        }
        catch(err){
            console.log(err)

        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    
    const addDrinkToCart = (id) => {
        const oldCart = JSON.parse(localStorage.getItem("products")) ?? []
        const newCart = JSON.stringify([...oldCart, {
            id,
            count: 1,
            extras: []
        }])
        localStorage.setItem("products", newCart)
    }
    if (Pizza ) return(
        <div className="container-section">
            <div><h1 className="Ctalog-header">Catalog</h1></div>
            <div className="feld">
        <section>
           <h1 className="Header-section">PIZZA CTALOG</h1> 
            
            {Pizza?.filter(i => i.type === 1).map(item=> 
            <div className="itemContainer">
                <h3 className="itemContainer__name">{item.name}</h3>
                <div className="itemContainer__options">
                    <h3 className="itemContainer__price">
                        {item.price}
                    </h3>
                    {item.type !== 3 && <button onClick={() => {setopenmodal({isOpen: true, selectedId: item.id})}} className="itemContainer__addToCart">+</button>}
                </div>
            </div>)}
       </section>
            <section className="left-flex"  >
            <h1 className="Header-section">Extras CTALOG</h1>
        {Pizza?.filter(i => i.type === 2).map(item=><div className="itemContainer">
                <h3 className="itemContainer__name">{item.name}</h3>
                <div className="itemContainer__options">
                    <h3 className="itemContainer__price">
                        {item.price}
                    </h3>
                </div>
            </div>)}
        </section>
    <section className="Right-section">
    <h1 className="Header-section">DRINKS CTALOG</h1> 
    {Pizza?.filter(i => i.type === 3).map(item=> <div className="itemContainer">
                <h3 className="itemContainer__name">{item.name}</h3>
                <div className="itemContainer__options">
                    <h3 className="itemContainer__price">
                        {item.price}
                    </h3>
                    <button onClick={() => {addDrinkToCart(item.id)}} className="itemContainer__addToCart">+</button>
                </div>
            </div>)}
</section>
<Extraselector open={openmodal } setIsOpen={setopenmodal} onClose={()=>setopenmodal(false)}/>
        </div>
        </div>

     
     
    )
}
export default Catalogsection