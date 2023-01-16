import {createBrowserRouter} from "react-router-dom";
import Main from "../components/pages/Main";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import Todos from "../components/pages/Todos";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/registration',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/todos',
        element: <Todos/>
    },
    {
        path: '*',
        element: <div>ERROR</div>
    }
])