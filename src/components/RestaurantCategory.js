import { useState } from "react";
import ItemList from "./Itemlist";
const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    //console.log(data);
    
    const handleClick = ()=>{
            setShowIndex();
        
    }
    return (
        <div>
        <div className=" bg-gray-100 w-6/12 mx-auto my-4  p-4 shadow-lg cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold text-sm">{data.title}  ({data.itemCards.length})</span>
            <span>^</span>
            </div>
           {showItems && <ItemList items = {data.itemCards}/>}
            
        </div>
        </div>
    )
}
export default RestaurantCategory;