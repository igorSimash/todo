import {createBrowserRouter} from "react-router-dom";
import Main from "../components/pages/Main";
import RegistrationFinal from "../components/pages/registration/RegistrationFinal";
import Login from "../components/pages/Login";
import Todos from "../components/pages/Todos";
import RegistrationStart from "../components/pages/registration/RegistrationStart";
import ForgotPass from "../components/pages/forgot-pass/ForgotPass";
import ForgotPassFinal from "../components/pages/forgot-pass/ForgotPassFinal";

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
        path: '/registration/final/:token',
        element: <RegistrationFinal/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/forgot-pass',
        element: <ForgotPass/>
    },
    {
        path: '/forgot-pass/:error/',
        element: <ForgotPass/>
    },
    {
      path: '/forgot-pass/final/:token',
      element: <ForgotPassFinal/>
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