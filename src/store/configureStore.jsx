import { configureStore} from "@reduxjs/toolkit";
import { blogReducer } from "../reducers/blogReducer";
import {authReducer} from "../reducers/authReducer"


const configureAppStore = () => {
    const store = configureStore({
        reducer: ({
            blogs : blogReducer,
            auth : authReducer,
        }),
    })
    return store;
}

export default configureAppStore;