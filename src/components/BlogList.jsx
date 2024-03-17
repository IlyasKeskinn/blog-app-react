import { connect } from "react-redux";
import { BlogItem } from "./BlogItem";
const BlogList = (props) => {
    return (
        <>
            {props.blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
            ))}
        </>
    );
}

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        blogs: state.blogs
    }
}
export default connect(mapStatetoProps)(BlogList);