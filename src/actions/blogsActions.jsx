import database from "../firebase/firebaseConfig"


export const setBlogs = (blogs) => (
    {
        type: "SET_BLOGS",
        blogs
    }
);

export const getBlogsFromDataBase = () => {
    return (dispatch) => {
        database.ref("blogs").once("value").then((snapshot) => {
            const blogs = [];
            snapshot.forEach((blog) => {
                blogs.push({
                    "id": blog.key,
                    ...blog.val()
                });
            })
            dispatch(setBlogs(blogs));
        })
    }
}

export const addBlog = (blog) => (
    {
        type: "ADD_BLOG",
        blog
    }
);

export const addBlogToDataBase = (blogData = {}) => {
    return (dispatch) => {
        const { title = "Title", desc = "Desc", date = 0 , img = ""} = blogData;
        const blog = { title, desc, date, img };
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
export const editBlogToDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).update(updates).then(() => {
            dispatch(editBlog(id, updates))
        });
    }
};

