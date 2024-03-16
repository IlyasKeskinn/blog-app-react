import { connect } from "react-redux";
import { removeBlog } from "../actions/blogsActions";
import { Link, useNavigate } from "react-router-dom";
const BlogDetailsItem = (props) => {
    const navigate = useNavigate();

    const handleRemove = () => {
        props.dispatch(removeBlog(props.blog.id));
        navigate("/blog");
    }


    return (
        <div className="container">
            <div className="card w-75 mx-auto">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h2 className="card-title">
                            {
                                props.blog.title
                            }
                        </h2>
                        <Link to={`/editblog/${props.blog.id}`}>
                            <button className="btn btn-success">Edit</button>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {props.blog.desc}
                    </p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" type="button" onClick={handleRemove}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default connect()(BlogDetailsItem);
