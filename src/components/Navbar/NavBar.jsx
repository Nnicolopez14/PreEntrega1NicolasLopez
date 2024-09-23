import CartWidget from "./CartWidget"
import logo from "../../assets/adidas-logo.jpg"
import "./navbar.scss"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img src={logo} alt="Adidas Logo" width={120}/>
            </div>

            <ul className="categories">
                <li>Calzado</li>
                <li>Mujer</li>
                <li>Hombre</li>
                <li>Niños</li>
                <li>Deporte</li>
                <li>Mundo Adidas</li>
                <li>Outlet</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar