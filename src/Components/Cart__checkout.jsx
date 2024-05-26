import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
function Cart_checkout(){
    let navigate=useNavigate()
const[number,Setnumber]=useState('')
const[name,Setname]=useState('')
const[expiry,setExpiry]=useState('')
const [cvc,SetCvc]=useState('')
const[focus,SetFocus]=useState('')
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
     onChange={e=>Setnumber(e.target.value)}
     onFocus={e=>SetFocus(e.target.name)}
     className="Credit_card_feilds"

      />
    <input type='text'
     name="name" 
     placeholder="Name" 
     value={name} 
     onChange={e=>Setname(e.target.value)}
     onFocus={e=>SetFocus(e.target.name)}
     className="Credit_card_feilds"
      />
    <input type='tel'
     name="expiry" 
     placeholder="MM/YY Expiry" 
     value={expiry} 
     onChange={e=>setExpiry(e.target.value)}
     onFocus={e=>SetFocus(e.target.name)}
     className="Credit_card_feilds"

      />
    <input type='tel'
     name="cvc" 
     placeholder="CVC" 
     value={cvc} 
     onChange={e=>SetCvc(e.target.value)}
     onFocus={e=>SetFocus(e.target.name)}
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


