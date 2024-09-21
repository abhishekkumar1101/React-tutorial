import { createContext} from "react";
export const RestaurantContext = createContext();
const UserContext = createContext({
    loggedInUser : "default User"
})

export default UserContext;