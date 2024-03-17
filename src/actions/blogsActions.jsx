import database from "../firebase/firebaseConfig"


export const addBlog = (blog) => (
    {
        type: "ADD_BLOG",
        blog
    }
);

export const addBlogToDataBase = (blogData = {}) => {
    return (dispatch) => {
        const { title = "Title", desc = "Desc", date = 0 } = blogData;
        const blog = { title, desc, date };

        database.ref("blogs").push(blog).then((response) => {
            dispatch(addBlog(
                {
                    "id": response.key,
                    ...blog
                }
            ))
        })
    };
}

export const removeBlog = (id) => (
    {
        type: "REMOVE_BLOG",
        id
    }
);

export const removeBlogToDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).remove().then(() => {
            dispatch(removeBlog(id));
        })
    }
}

export const editBlog = (id, updates) => (
    {
        type: "EDIT_BLOG",
        id,
        updates
    }
)
