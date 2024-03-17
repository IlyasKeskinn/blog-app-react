import { NavLink } from "react-router-dom";

const socialIcons = [
    { "url": "/", "icons": "bi bi-twitter-x" },
    { "url": "/", "icons": "bi bi-facebook", },
    { "url": "/", "icons": "bi bi-instagram" },
    { "url": "/", "icons": "bi bi-threads" },
    { "url": "/", "icons": "bi bi-pinterest" }
]
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
                <div className="social-icons__wrapper d-flex align-items-center justify-content-between ">
                    {
                        socialIcons.map((socialIcon, index) => {
                            return (
                                <a href={socialIcon.url} className="social-icon-link" key={index}><i className={socialIcon.icons}></i></a>);
                        })
                    }

                </div>
            </div>
        </nav>
    );
}