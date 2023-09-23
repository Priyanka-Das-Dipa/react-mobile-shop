import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorite from "../pages/Favorite/Favorite";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Phone from "../pages/Phone/Phone";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/phones.json')

            },
            {
                path: "/favorite",
                element: <Favorite></Favorite>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <Phone></Phone>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default myCreatedRoute;