import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/pages/main/Main";
import RegistrationStart from "../components/pages/registration/RegistrationStart";
import RegistrationFinal from "../components/pages/registration/RegistrationFinal";
import Login from "../components/pages/login/Login";
import ForgotPassStart from "../components/pages/forgot-pass/ForgotPassStart";
import ForgotPassFinal from "../components/pages/forgot-pass/ForgotPassFinal";
import Todos from "../components/pages/todos/Todos";
import ChangePass from "../components/pages/change-pass/ChangePass";

const Router:React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/registration/start" element={<RegistrationStart/>}/>
            <Route path='/registration/start/:error/' element={<RegistrationStart/>}/>
            <Route path='/registration/final/:token' element={<RegistrationFinal/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-pass' element={<ForgotPassStart/>}/>
            <Route path="/forgot-pass/:error/" element={<ForgotPassStart/>}/>
            <Route path='/forgot-pass/final/:token' element={<ForgotPassFinal/>}/>
            <Route path='/todos' element={<Todos/>}/>
            <Route path='/todos/change-pass' element={<ChangePass/>}/>\
            <Route path='*' element={<div>ERROR</div>}/>
        </Routes>
    );
};

export default Router;