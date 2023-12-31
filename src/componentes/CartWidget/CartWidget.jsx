import { useContext } from "react";
import cart from "./assets/cart pr2.png";
import { CartContext } from "../../context/CartContext"; 
import { Link } from "react-router-dom";


export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
       <Link to='/cart' className="CartWidget" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
       <img src={cart} alt="cart-widget" className="Cartimg" />
       { totalQuantity }
       </Link>
    )
}