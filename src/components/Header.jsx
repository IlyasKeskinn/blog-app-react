import { Nav } from "./Nav"

export const Header = () => {
    return (
        <header className="header">
            <Nav />
            <div className="mt-5">
                <div className="container logobar d-flex justify-content-center align-items-center flex-column">
                    <div className="logo">
                        <h1 className="logo-title">Zephyra</h1>
                    </div>
                    <div className="slogan">
                        <p className="slogan-text">
                            A software <span className="mark-text">
                                developer's</span> blog
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}