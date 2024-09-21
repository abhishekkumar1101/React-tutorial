import { useDispatch } from "react-redux";
import{ CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items})=>{
   //console.log(items);
   const dispatch = useDispatch();
    const handleAddItem =(item)=>{
        dispatch(addItem(item));
    }
   
    return (
         <div>
         
         
          { items.map((item)=>( 
              <div 
              key = {item.card.info.id} className="p-2 m-2 border:solid border-b-2 text-left">
    
                <div className="p-2 flex ">

                    <div className="flex flex-col w-9/12">

                    <span className="font-bold text-lg">{item.card.info.name}</span>
                    <span className="font-bold text-lg">{" "} {"₹"} {item.card.info.price?
                    item.card.info.price/100:item.card.info.defaultPrice/100}
                    </span>
                    <span>⭐{item.card.info.ratings.aggregatedRating.rating  || 0} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 0})</span>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                    <div className="absolute justify-items-end"><button className="border  border-black w-20 bg-green-500 text-white rounded-lg mx-8 my-24" onClick={()=>handleAddItem(item)}>ADD</button></div>
                    <img src = {CDN_URL+ item.card.info.imageId } className = "bg-cover bg-center" />
                    </div>
                </div>
            
                
                </div>
            ))}  
           
           </div>
        
    )
}
export default ItemList;
