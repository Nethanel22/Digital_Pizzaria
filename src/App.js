import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Ourcatalog from './Pages/Ourcatalog';
import Mycart from './Pages/Mycart';
import CartpersonalDetails from './Components/Cart_personal_details';
import Extraselector from './Components/ExtrasSelector';
import Cart_checkout from './Components/Cart__checkout';
import Finish from './Components/Finish';
import Stores from './Pages/Stores';
import MyOrdersPagePagers from './Pages/MyOrders';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Homepage/>}>Homepage</Route>
        <Route path='/catalog' element={<Ourcatalog/>}>Catalog</Route>
        <Route path='/Mycart' element={<Mycart/>}>Mycart </Route>
        <Route path='/stores' element={<Stores/>}>store</Route>
        <Route path="/Mycart/personaldetails" element={<CartpersonalDetails/>}></Route>
        <Route path='/catalog/extraselector/:id' element={<Extraselector/>}>Catalog</Route>
<Route path='/Mycart/checkout' element={<Cart_checkout/>}></Route>
<Route path='/finsh' element={<Finish/>}> </Route>
<Route path='/myorders' element={<MyOrdersPagePagers/>}> </Route>

      </Routes>


    </div>
  );
}

export default App;
