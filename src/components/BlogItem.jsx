import { Link } from "react-router-dom";
export const BlogItem = ({ blog }) => {
    return (
        <Link to={`/details/${blog.id}`} state={{ some: "value" }}>
            <div className="card w-25">
                <div className="card-header">
                    <h3 className="card-title">
                        {blog.title}
                    </h3>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {blog.desc}
                    </p>
                </div>
            </div>
        </Link>
    );
}