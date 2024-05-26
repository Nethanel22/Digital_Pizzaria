import Store from "./Store";

function StoreContainer(){
    return(
<div className="Store-container">
    <Store name="Digital pizzaria" tel="08-6899861" city="Ashdod"></Store>
    <br/>
<Store name="Digital pizzaria" tel="03-6899861" city="Tel Aviv"></Store>
<br/>
<Store name="Digital pizzaria" tel="02-6899861" city="Hifa"></Store>


</div>

    )
}
export default StoreContainer;