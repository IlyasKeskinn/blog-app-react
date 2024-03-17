export const CarouselCard= ({post}) => {
    console.log(post.img);
 return(
    <div className="carousel-card position-relative">
        <img className="img-fluid" alt={post.title} src={`../img/postImage/${post.img}`}></img>
        <div className="carousel-title-bar">
            <div className="categorty-title d-flex justify-content-center align-items-center flex-column">
                <span className="badge text-bg-warning text-light p-2">{post.tag}</span>
                <p className="lead card-text carousel-card-text">{post.title}</p>
            </div>
        </div>
    </div>
 ); 
}