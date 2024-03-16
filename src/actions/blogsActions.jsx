import { v4 as uuid } from 'uuid';
export const addBlog = ({title = "Title", desc = "Desc", date = 0 }) => (
    {
        type : "ADD_BLOG",
        blog : {
            id : uuid(),
            title : title,
            desc : desc,
            date : date
        }
    }
);

export const removeBlog = (id) => (
    {
        type: "REMOVE_BLOG",
        id 
    }
);

export const editBlog = (id ,updates) => (
    {
        type : "EDIT_BLOG",
        id,
        updates
    }
)