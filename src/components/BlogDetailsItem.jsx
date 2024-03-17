import { connect } from "react-redux";
import { removeBlogToDatabase } from "../actions/blogsActions";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";

const BlogDetailsItem = (props) => {
    const navigate = useNavigate();

    const handleRemove = () => {
        props.dispatch(removeBlogToDatabase(props.blog.id));
        navigate("/blog");
    }
    return (
        <div className="post-contentCol col-lg-12 my-5">
            <article className="content">
                <div>
                    <Link to={`/details/${props.blog.id}`}>
                        <img src={`../img/postImage/${props.blog.img}`} alt={props.blog.title} className="img-fluid post-img" />
                    </Link>
                </div>
                <div className="mt-4">
                    <div className="p-4">
                        <Link to={`/editblog/${props.blog.id}`}>
                            <button className="btn btn-secondary btn-sm me-3">Edit</button>
                        </Link>
                        <button className="btn btn-secondary btn-sm" onClick={handleRemove}>Delete</button>
                    </div>
                    <div className="post-excerpt mt-5">
                        <div className="post-heading text-center my-3">
                            <span className="badge text-bg-warning text-uppercase text-light">{props.blog.tag}</span>
                            <h2 className="text-capitalize h5 my-3">{props.blog.title}</h2>
                            <p className="post-publish-date">OCTOBER 29, 2016 <span className="ms-2">By Ilyas Keskin</span> </p>
                        </div>
                        <div className="post-desc my-3">
                            <p>{props.blog.desc}</p>
                        </div>
                        <div className="share-bar d-flex justify-content-between align-items-center">
                            <p style={{ marginBottom: 0 }}>No Comments</p>
                            <SocialIcons />
                        </div>
                    </div>

                </div>
            </article>
        </div>
    );
}

export default connect()(BlogDetailsItem);
