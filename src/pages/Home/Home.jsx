import Carousel from "../../components/Carousel";
import BlogList from "../../components/BlogList";
const Home = (props) => {
console.log(props);
    return (
        <div className="mt-4">
            <Carousel/>
            <div className="container mt-4">
                <div className="row">
                <BlogList/>
                </div>
            </div>
        </div>
    );
}


export default Home