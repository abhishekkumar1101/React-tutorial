import {CDN_URL} from "../utils/contants";

const RestaurantCard = (props)=>{
    const  {resData} = props;
    return (
    <div className="res-card">
      
          <img className="res-logo" src = { CDN_URL 
            + resData.info.cloudinaryImageId 
            }
            /> 
            
                <h3>{resData.info.name}</h3>
                <p>{resData.info.avgRating}</p> 
            
                <p>{resData.info.cuisines.join(' ,')}</p>
                <p>{resData.info.costForTwo}</p>
           
            
                <p>{resData.info.locality},{resData.info.areaName}</p>
                <p>{resData.info.sla.slaString}</p>
            
        
    </div>
    );
}
export default RestaurantCard;