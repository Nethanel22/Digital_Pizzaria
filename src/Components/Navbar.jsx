import "../App.css"
import {Link} from 'react-router-dom'
import shoppingcart from "../Images/shoppingcart.png"
import logo from "../Images/logo.png"

function Navbar(){
    return(
        <div className='Navbar'>
            <img src={logo}  alt="" className="logo" />
            <Link to='/'  className="n1">homepage</Link>
            <Link to='/catalog' className='n1'> Our catalog</Link>
            <Link to='/stores' className='n1'>Stores</Link>
            <Link to='/myorders' className='n1'>My orders</Link>
            <Link className='n1' to='/Mycart'><img src={shoppingcart} alt=""></img></Link>
        </div>
    )
}
export default Navbar;