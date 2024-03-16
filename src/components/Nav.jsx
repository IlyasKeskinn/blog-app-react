import { Link, NavLink } from "react-router-dom";
export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand text-danger" to="/">MegaBlog</Link>
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    <NavLink to="/newblog" className="nav-item nav-link">+</NavLink>
                </div>
            </div>
        </nav>
    );
}