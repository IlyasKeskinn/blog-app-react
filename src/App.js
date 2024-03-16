import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About.jsx"
import { Contact } from "./pages/Contact/Contact.jsx"
import { BlogPage } from "./pages/BlogPage/BlogPage.jsx";
import  NewBlog  from "./pages/NewBlog/NewBlog.jsx";
import BlogDetails from "./pages/BlogDetails/BlogDetails.jsx";
import EditBlog from "./pages/EditBlog/EditBlog.jsx";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
       
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "blog", element: <BlogPage /> },
        { path: "/details/:id", element: <BlogDetails /> },
        { path: "contact", element: <Contact /> },
        { path: "newblog", element: <NewBlog /> },
        {path : "editblog/:id", element : <EditBlog/>}
      ],
      
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
