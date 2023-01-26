import React from 'react';
import axios,{AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";

const Todos:React.FC = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get(process.env.REACT_APP_API_LOGOUT as string,
            {
                withCredentials: true
            })
            .then((res:AxiosResponse) => {
                if (res.status === 200) {
                    navigate("/login");
                }
            })
    }

    return (
        <div>
            Todos
            <button onClick={handleLogout}>EXIT</button>
        </div>
    );
};

export default Todos;