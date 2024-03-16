import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { addBlog, removeBlog, editBlog } from './actions/blogsActions';
import configureAppStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureAppStore();



const blog1 =store.dispatch(addBlog({title : "baslik1" , desc : "acik"}))
const blog2 =store.dispatch(addBlog({title : "baslik2" , desc : "acik"}))
store.dispatch(addBlog({title : "baslik2" , desc : "acik"}))
store.dispatch(addBlog({title : "baslik3" , desc : "acik"}))

store.dispatch(removeBlog(blog2.blog.id));

store.dispatch(editBlog(blog1.blog.id, {title : "title" , "desc" : "desc"}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

