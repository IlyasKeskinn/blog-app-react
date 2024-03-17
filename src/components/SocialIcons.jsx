const socialIcons = [
    { "url": "/", "icons": "bi bi-twitter-x" },
    { "url": "/", "icons": "bi bi-facebook", },
    { "url": "/", "icons": "bi bi-instagram" },
    { "url": "/", "icons": "bi bi-threads" },
    { "url": "/", "icons": "bi bi-pinterest" }
]
export const SocialIcons = () => {
    return (
        <div className="social-icons__wrapper d-flex align-items-center justify-content-between ">
            {
                socialIcons.map((socialIcon, index) => {
                    return (
                        <a href={socialIcon.url} className="social-icon-link" key={index}><i className={socialIcon.icons}></i></a>);
                })
            }
        </div>
    );
}