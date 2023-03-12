import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home";
import Terms from "../../pages/others/TemsandConditions/Terms";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../pages/others/Profile/Profile";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://dragon-news-server-gilt-xi.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-gilt-xi.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute> ,
                loader: ({params}) => fetch(`https://dragon-news-server-gilt-xi.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register/>
            },
          {
            path: '/terms',
            element: <Terms></Terms>
          },
          {
            path: '/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
          }
        ]
    }
])