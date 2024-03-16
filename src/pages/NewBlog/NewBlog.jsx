import BlogForm from "../../components/BlogForm";
import { connect } from "react-redux";
import { addBlog } from "../../actions/blogsActions"
import { useNavigate } from "react-router-dom";

const NewBlog = (props) => {
    console.log(props);
    const navigate = useNavigate();
   
    const onSubmit = (blog) => {
        props.dispatch(addBlog(blog));
        navigate("/blog")
    }
    return (
        <div className="mt-5">
            <div className="w-75 mx-auto">
                <h3 className="display-6">Add New Blog</h3>
                <BlogForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default connect()(NewBlog);

