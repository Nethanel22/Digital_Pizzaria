import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
function Cart_checkout(){
    let navigate=useNavigate()
const[number,setNumber]=useState('')
const[name,setName]=useState('')
const[expiry,setExpiry]=useState('')
const [cvc,setCvc]=useState('')
const[focus,setFocus]=useState('')
return(
    <div className="Checkout_container">
        <div className="Cart_container">
            <h2>Checkout</h2>
        <div className="Cart_checkout">
        <Cards
        number={number}
        name={name}
        xpiry={expiry}
        cvc={cvc}
        focused={focus}

        />
<form>
    <input type='tel'
     name="number" 
     placeholder="Card Number" 
     value={number}
     onChange={e=>setNumber(e.target.value)}
     onFocus={e=>setFocus(e.target.name)}
     className="Credit_card_feilds"

      />
    <input type='text'
     name="name" 
     placeholder="Name" 
     value={name} 
     onChange={e=>setName(e.target.value)}
     onFocus={e=>setFocus(e.target.name)}
     className="Credit_card_feilds"
      />
    <input type='tel'
     name="expiry" 
     placeholder="MM/YY Expiry" 
     value={expiry} 
     onChange={e=>setExpiry(e.target.value)}
     onFocus={e=>setFocus(e.target.name)}
     className="Credit_card_feilds"

      />
    <input type='tel'
     name="cvc" 
     placeholder="CVC" 
     value={cvc} 
     onChange={e=>setCvc(e.target.value)}
     onFocus={e=>setFocus(e.target.name)}
     className="Credit_card_feilds"

      />



     </form>
    </div>
    <button className="Finish-button" onClick={()=>{
         navigate("/finsh")
    }}>Finish</button>


        </div>

    </div>
)
}
export default Cart_checkout


