import RestaurantCard from "./Restaurantcard.js"
import resList from "../utils/mockData.js";
const Body = ()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {
                resList.map(restaurant => <RestaurantCard key ={restaurant.info.id}  resData = {restaurant} />)
            }
            
            </div>
        </div>
    )
};
export default Body;