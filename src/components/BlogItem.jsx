import { Link } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";
export const BlogItem = ({ blog }) => {
    const words = blog.desc.split(" ");
    const maxWords = 80;

    const shortendWords = words.slice(0, maxWords);
    const shorText = shortendWords.join(" ").concat("...");
    return (
        <div className="post-contentCol col-lg-8 my-5">
            <article className="content">
                <div>
                    <Link to={`/details/${blog.id}`}>
                        <img src={`../img/postImage/${blog.img}`} alt={blog.title} className="img-fluid post-img" />
                    </Link>
                </div>
                <div className="mt-4">
                    <div className="post-excerpt mt-5">
                        <div className="post-heading text-center my-3">
                            <span className="badge text-bg-warning text-uppercase text-light">{blog.tag}</span>
                            <h2 className="text-capitalize h5 my-3">{blog.title}</h2>
                            <p className="post-publish-date">OCTOBER 29, 2016 <span className="ms-2">By Ilyas Keskin</span> </p>
                        </div>
                        <div className="post-desc my-3">
                            <p>{shorText}</p>
                        </div>
                        <div className="text-center my-3">
                            <Link to={`/details/${blog.id}`}>
                                <button className="btn btn-outline-dark p-3">Read More...</button>
                            </Link>
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