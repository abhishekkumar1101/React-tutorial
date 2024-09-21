import {CDN_URL} from "../utils/contants";
import UserContext from "../utils/userContext";
import { useContext } from "react";
const RestaurantCard = (props) => {
    const { resData } = props;

    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="m-6">
        <div className="res-card  w-[300px] h-[400px] bg-gray-200 rounded-lg flex flex-col object-fill hover:border-black">
            {/* Image Section */}
            <div className="relative w-full h-[240px] overflow-hidden">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={CDN_URL + resData.info.cloudinaryImageId}
                    alt={resData.info.name}
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col p-2 flex-grow overflow-hidden scrollable-content">
                <h3 className="font-bold text-xl py-2 truncate">{resData.info.name}</h3>
                <div className="flex">
                    <p className="text-sm font-bold  truncate">⭐{resData.info.avgRating}</p>
                    <p className="text-sm font-bold truncate mx-2">{resData.info.sla.slaString}</p>
                    </div>
                <p className="text-sm text-gray-600 truncate">{resData.info.cuisines.join(' ,')}</p>
                <p className="text-sm text-gray-600 truncate">{resData.info.costForTwo}</p>
                <p className="text-sm text-gray-600 truncate">{resData.info.locality}, {resData.info.areaName}</p>
                
                <p>User : {loggedInUser}</p>
            </div>
        </div>
        </div>
    );
};

    //higher order component
    export const withPromotedLabel = (RestaurantCard)=>{
        return (props) =>{
            return (
                <div>
                    <label className="promoted absolute bg-black text-white m-2 p-2 rounded-lg">
                        promoted
                        </label>
                        <RestaurantCard {...props} />
                </div>
            );
        };
    };
export default RestaurantCard;