function Store(props){
    return(
        <div className="Store">  
        <h1>{props.name}</h1>
            <h2>{props.tel}</h2>
            <h2>{props.city}</h2>

        </div>
    )
}
export default Store;