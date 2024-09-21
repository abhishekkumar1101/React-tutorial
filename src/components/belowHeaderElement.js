import { useContext } from "react";
import { RestaurantContext } from "../utils/userContext";

const BelowheaderElement = () => {
  const { restaurantData } = useContext(RestaurantContext);

  return (
    <div>
      {/* Access the restaurant data here */}
      {restaurantData ? (
        <p>Number of Restaurants: {restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.length}</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default BelowheaderElement;
