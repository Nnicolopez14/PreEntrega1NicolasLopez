import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/adidas-logo.jpg"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <img src={logo} alt="Adidas Logo" width={120}/>
            </Link>

            <ul className="categories">
                <li className="category">
                    <NavLink to="/category/calzado" className={({isActive}) => ( isActive ? "active-link" : "") + " base-class"}>Calzado</NavLink>
                </li>
                <li className="category">
                    <NavLink to="/category/mujer" className={({isActive}) => ( isActive ? "active-link" : "") + " base-class"}>Mujer</NavLink>
                </li>
                <li className="category">
                    <NavLink to="/category/hombre" className={({isActive}) => ( isActive ? "active-link" : "") + " base-class"}>Hombre</NavLink>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar