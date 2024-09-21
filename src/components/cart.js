import { useDispatch, useSelector } from "react-redux";
import ItemList from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store) =>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return(
        <div className="m-4 text-center p-4">
            <h1>Cart</h1>
            <button className="text-white bg-black m-4 p-2 rounded" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length===0 && <h1>Your Cart is Empty.Kindly Add Some Items</h1>}
     <div className="w-6/12 m-auto" >
        <ItemList items = {cartItems}/></div>
    </div>
    );
};
export default Cart;