import React, { Component } from 'react'

export class BlogForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : props.blog? props.blog.title : "",
            desc : props.blog? props.blog.desc : "",
            date : Date.now(),
            error : null,
        }
    }
    handleSubmit = (e)=> {
        e.preventDefault();

        if (this.state.title.length <= 0 || this.state.desc.length <= 0) {
            this.setState({error : {msg : "Please enter title and desc", alert : "danger" }})
        }else{
            this.setState({error : null})
            const blog  = {
                title : this.state.title,
                desc : this.state.desc,
                date : this.state.date
            }
            this.props.onSubmit(blog);

        }

    }
  render() {
    return (
        <div className="card my-4 p-3">
            <form onSubmit={this.handleSubmit}>
                <div className="my-4">
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name="title" id="title" value={this.state.title} className="form-control" onChange={(e) => this.setState({title : e.target.value})} />
                </div>
                <div className="my-4">
                    <label htmlFor="desc">Blog Desc</label>
                    <textarea name="desc" id="desc" value={this.state.desc} className="form-control"onChange={(e) => this.setState({desc : e.target.value})} ></textarea>
                </div>
                <div className="w-100 my-4">
                    <button type="onsubmit" className="btn btn-dark d-block w-100 p-3">Submit</button>
                </div>
            </form>
        </div>
    )
  }
}

export default BlogForm;