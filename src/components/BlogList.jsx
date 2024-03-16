import { connect } from "react-redux";
import { BlogItem } from "./BlogItem";
const BlogList = (props) => {
    return (
        <div>
            {props.blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
            ))}
        </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        blogs : state.blogs
    }
}
export default connect(mapStatetoProps)(BlogList);