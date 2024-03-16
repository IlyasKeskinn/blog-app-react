import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {withRouter} from "../../path/withRouter"
import  BlogDetailsItem  from "../../components/BlogDetailsItem";



const BlogDetails = (props) => {
    return (
        <div className="mt-4">
            <BlogDetailsItem blog = {props.blog}/>
        </div>
    );
}





const mapStatetoProps = (state, {id}) => {
    return {
        blog: state.blogs.find((blog => { return blog.id === id }))
    }
}

export default compose(
    withRouter,              // <-- injects a params prop
    connect(mapStatetoProps) // <-- props.params accessible
  )(BlogDetails);