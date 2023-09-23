import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorite from "../pages/Favorite/Favorite";
import Login from "../pages/Login/Login";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/favorite",
                element: <Favorite></Favorite>
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    }
])

export default myCreatedRoute;