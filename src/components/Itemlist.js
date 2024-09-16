const ItemList = (items)=>{
    console.log(items);

    return (
         <div>
         { items.map((item)=>( 
            <div key = {item.card.info.id}>
                <div>
                    <span>{item.card.info.name}</span>
                    <span>{item.card.info.price/100}</span>
                </div>
                <p>
                    <span>{item.card.info.description}</span>      
                </p>
                </div>
            ))} 
           
           </div>
        
    );
}
export default ItemList;
