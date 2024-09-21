import RestaurantCard,{withPromotedLabel} from "./Restaurantcard.js"
import { useEffect, useState,useContext } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/userContext.js";

//import resList from "../utils/mockData.js";
const Body = ()=>{
    //Local state variable 
    const [listOfRestaurants,setListOfRestaurant]=useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const [searchText,setSearchtext] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json = await data.json();
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false)
        return(
            <h1>
                LOOKS LIKE YOU ARE OFFLINE.PLEASEC CHECK YOUR INTERNET CONNECTION
            </h1>
        );
        const {loggedInUser,setUserName} = useContext(UserContext);
    
    return listOfRestaurants.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                <input
                className=  "border border-black border-solid " 
                type="text"
                value={searchText} 
                onChange={(e) =>{
                    setSearchtext(e.target.value);
                    
                }}
                />
                <button className="search-btn bg-green-300 px-4 py-1 m-1 rounded-md" 
                onClick={
                    () =>{
                        const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())       
                                 ) ;
                        setFilteredRestaurant(filteredRestaurant);
                    }
                }
                >search</button>
                </div>
                    <button className="filter-btn bg-gray-50 h-10 m-8 p-2 rounded-md hover:bg-gray-200" onClick ={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.6
                        );
                        setListOfRestaurant(filteredList)
                        console.log(listOfRestaurants);
                    }}>Top Rated Restaurant</button>
            <div className="search m-6 p-4">
                <label>Username: </label>
                <input
                className=  "border border-black border-solid " 
                type="text"
                value={loggedInUser} 
                onChange={(e) =>
                    setUserName(e.target.value)}
                />
                </div>
                </div>
            <div className="res-container flex flex-wrap m-12">
                {
                filteredRestaurant.map(restaurant =>
                     <Link key = {restaurant.info.id}
                     to ={ "/restaurants/"+ restaurant.info.id} >
                        {restaurant.info.promoted ? (<RestaurantCardPromoted resData = {restaurant}/>) : (<RestaurantCard  resData = {restaurant}/>)
                        }</Link>)
            }
            
            </div>
        </div>
    )
};
export default Body; 