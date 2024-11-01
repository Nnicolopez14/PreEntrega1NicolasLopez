import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext)

  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <h2 className="title-empty-cart">¡Vaya! Tu carrito está vacío 😢.</h2>
        <Link to="/" className="button-home-empty-cart" >Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.image} width={100} alt="" />
            <p className="text-item-cart">{productCart.name}</p>
            <p className="text-item-cart">Precio Unitario: ${productCart.price}</p>
            <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">Precio Parcial: ${ productCart.price * productCart.quantity } </p>
            <button className="delete-item-cart" onClick={ () => deleteProductInCart(productCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio Total: ${totalPrice()}</p>
        <Link to="/checkout" className="button-continue">Continuar con mi compra</Link>
        <button className="button-delete-cart" onClick={deleteCart} >Vaciar Carrito</button>
      </div>
    </div>
  )
}
export default Cart