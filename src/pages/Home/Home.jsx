import Carousel from "../../components/Carousel";
import BlogList from "../../components/BlogList";
import { Aside } from "../../components/Aside";
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
                   <Aside/>
                </div>
            </div>
        </div>
    );
}


export default Home