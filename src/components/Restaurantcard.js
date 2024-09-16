import {CDN_URL} from "../utils/contants";

const RestaurantCard = (props)=>{
    const  {resData} = props;
    return (
    <div className="res-card p-4 m-4 w-[250px] bg-gray-200 rounded-lg" >
      
          <img className="res-logo rounded-lg" src = { CDN_URL 
            + resData.info.cloudinaryImageId 
            }
            /> 
            
                <h3 className="font-bold text-xl py-2">{resData.info.name}</h3>
                <p>{resData.info.avgRating}</p> 
            
                <p>{resData.info.cuisines.join(' ,')}</p>
                <p>{resData.info.costForTwo}</p>
           
            
                <p>{resData.info.locality},{resData.info.areaName}</p>
                <p>{resData.info.sla.slaString}</p>
            
        
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