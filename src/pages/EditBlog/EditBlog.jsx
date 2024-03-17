import BlogForm from "../../components/BlogForm";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compose } from "redux";
import { withRouter } from "../../path/withRouter";
import { editBlogToDatabase } from "../../actions/blogsActions";

const EditBlog = (props) => {
    const navigate = useNavigate();

    const onSubmit = (blog) => {
        props.dispatch(editBlogToDatabase(props.blog.id,blog));
        navigate("/blog");
    }
    return (
        <div className="mt-5">
            <div className="w-75 mx-auto">
                <h3 className="display-6">Edit Blog</h3>
                <BlogForm blog ={props.blog} onSubmit = {onSubmit} />
            </div>
        </div>
    );
}

const mapStatetoProps =(state , {id}) => {
    return {
        blog : state.blogs.find((blog => {return blog.id === id}))
    };
}

export default compose(
    withRouter,
    connect(mapStatetoProps))(EditBlog);

