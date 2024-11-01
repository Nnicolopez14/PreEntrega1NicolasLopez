import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const total = totalQuantity()

    return (
    <Link to="/cart" className="cartwidget">
        <RiShoppingCartLine className={ total > 0 ? "icon-cartwidget" : "empty-cartwidget" } />
        <p className="number-cartwidget">{ total >= 1 && total }</p>
    </Link>
    )
}

export default CartWidget