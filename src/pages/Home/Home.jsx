import Carousel from "../../components/Carousel";
import BlogList from "../../components/BlogList";
import { SocialIcons } from "../../components/SocialIcons";
const Home = (props) => {
    console.log(props);
    return (
        <div className="mt-4">
            <Carousel />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-9">
                        <BlogList />
                    </div>
                    <aside className="col-lg-3 my-5">
                        <div className="aside-about mb-4">
                            <div className="widget widget-dark mb-3">About</div>
                            <div className="about-img__wrapper mb-3">
                                <img className="img-fluid" alt="" src="../img/avatar.jpeg"></img>
                            </div>
                            <p className="about-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti eligendi pariatur minima rerum sed delectus et officiis veritatis qui? Quam reprehenderit ea unde, quis quos error exercitationem id. Quaerat reiciendis itaque quisquam explicabo excepturi. Hic alias corrupti illum ducimus ipsa delectus, a quis exercitationem quia nesciunt facilis assumenda asperiores!
                            </p>
                        </div>
                        <div className="aside-social-media mb-4">
                            <div className="widget mb-3">Stay Connected</div>
                            <div className="d-flex justify-content-center align-items-start mb-3 ">
                                <SocialIcons  /> 
                            </div>
                        </div>
                        <div className="aside-categories mb-4">
                            <div className="widget">Categories</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Fashion (2)</li>
                                <li className="list-group-item">Food (3)</li>
                                <li className="list-group-item">Lifestyle (1)</li>
                                <li className="list-group-item">Travel (4)</li>
                            </ul>
                        </div>
                        <div className="aside-tag mb-4">
                            <div className="widget">Tag Cloud</div>
                            <div className="d-flex align-items-center tags">
                                <span className="tag">Fashion</span>
                                <span className="tag">Food</span>
                                <span className="tag">Travel</span>
                                <span className="tag">Lifestyle</span>
                                <span className="tag">Music</span>
                            </div>
                        </div>
                        
                    </aside>
                </div>
            </div>
        </div>
    );
}


export default Home