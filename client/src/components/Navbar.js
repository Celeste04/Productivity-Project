import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <nav className="nav">
            <Link to="/" className="site-name">
                Productivity Project
            </Link>
            <ul>
                <li>
                    <Link to="/timer">Timer</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>    
        </nav>
    )
}