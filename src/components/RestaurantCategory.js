import ItemList from "./Itemlist";
const RestaurantCategory = ({data})=>{
    //console.log(data);
    return (
        <div>
        <div className=" bg-gray-100 w-6/12 mx-auto my-4  p-4 shadow-lg">
        <div className="flex justify-between">
            <span className="font-bold text-sm">{data.title}  ({data.itemCards.length})</span>
            <span>^</span>
            </div>
            <ItemList items = {data.itemCards}/>
            
        </div>
        </div>
    )
}
export default RestaurantCategory;