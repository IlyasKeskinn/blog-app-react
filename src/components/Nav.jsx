import { NavLink } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";


export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    <NavLink to="/newblog" className="nav-item nav-link">Add New Blog</NavLink>
                </div>
                <SocialIcons/>  
            </div>
        </nav>
    );
}