import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/pages/Main";
import RegistrationStart from "../components/pages/registration/RegistrationStart";
import RegistrationFinal from "../components/pages/registration/RegistrationFinal";
import Login from "../components/pages/Login";
import ForgotPass from "../components/pages/forgot-pass/ForgotPass";
import ForgotPassFinal from "../components/pages/forgot-pass/ForgotPassFinal";
import Todos from "../components/pages/Todos";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/registration/start" element={<RegistrationStart/>}/>
            <Route path='/registration/start/:error/' element={<RegistrationStart/>}/>
            <Route path='/registration/final/:token' element={<RegistrationFinal/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-pass' element={<ForgotPass/>}/>
            <Route path="/forgot-pass/:error/" element={<ForgotPass/>}/>
            <Route path='/forgot-pass/final/:token' element={<ForgotPassFinal/>}/>
            <Route path='/todos' element={<Todos/>}/>
            <Route path='*' element={<div>ERROR</div>}/>
        </Routes>
    );
};

export default Router;