import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
function CartpersonalDetails(){
let navigate=useNavigate()
    const options = ['Cash','Creditcard'];
const handelchange=(event)=>{
if(event.target.value==="Creditcard"){
    console.log(event.target.value)
}
}

    return(
                    <form className="container-details" method='GET' action='/Mycart/checkout' >
                        <div className="Cart_container">
                            <h2 className="personal-data-header">Personal Details</h2>
                        <div className="feilds">
            <div className="details-left">
            <h3>First name</h3>
        <input type="text" name="Firstname" id="" />
        <h3>last name</h3>
        <input type="text" name="Lastname" id="" />
        <h3>phone</h3>
        <input required onChange={(e) => localStorage.setItem("phone", e.target.value)} type="tel" name="Phone" id="" />
         </div>
         <div className="details-right">
        <h3>Adrees</h3>
        <input type="text" name="Adress" id="" />
        <h3>Apartment</h3>
        <input type="number" name="Apartment" id="" />
        <h3>payment method</h3>
         <select name="Paymentmethod"  >
         {options.map((option, index) => {
						return <option key={index} >
							{option}
						</option>
					})}

         </select>
         </div>

            </div>
            <input type="submit" value="checkout" className="check-out-button"></input>


                        </div>
        </form>

    
    )
}
export default CartpersonalDetails
