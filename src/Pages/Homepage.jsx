import '../App.css'
import { useNavigate } from 'react-router-dom';
function Homepage(){
let navigate=useNavigate()
    return(
        <div className="Homepage">
<h1 className='Homeheader'>BUY Online</h1> 
<h1 className='Homeheader'>Eat slowly</h1>
<button className='Order-button' onClick={()=>{
    navigate("/catalog")
}}>Order now</button>
        </div>
    )
}
export default Homepage;
