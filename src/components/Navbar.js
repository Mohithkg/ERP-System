import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css"
function Navbar() {
    return (
    <nav>
        <Link className="title" to="/">ERP</Link>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>
            </li>
            <li>
                <NavLink to="orders">Orders</NavLink>
            </li>
        </ul>
    </nav>);
}

export default Navbar;