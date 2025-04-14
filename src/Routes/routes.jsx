import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Users/Users";

import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import AddBlog from "../Pages/AddBlog/AddBlog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignIn from "../Pages/SignIn/SignIn";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() =>fetch('http://localhost:5000/blog')
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/addBlog",
        element: <AddBlog />,
      },
      {
        path: "/updateBlog/:id",
        element: <UpdateBlog />,
        loader:({params}) =>fetch(`http://localhost:5000/blog/${params.id}`)
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);
