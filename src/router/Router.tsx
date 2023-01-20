import {createBrowserRouter} from "react-router-dom";
import Main from "../components/pages/Main";
import RegistrationFinal from "../components/pages/RegistrationFinal";
import Login from "../components/pages/Login";
import Todos from "../components/pages/Todos";
import RegistrationStart from "../components/pages/RegistrationStart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/registration/start',
        element: <RegistrationStart/>
    },
    {
        path: '/registration/start/:error/',
        element: <RegistrationStart/>
    },
    {
        path: '/registration/final/',
        element: <RegistrationFinal/>
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