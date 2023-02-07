import React, {useEffect} from 'react';
import axios,{AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUserLanguage} from "../../redux/action-creators/getUserLanguage";

const Todos:React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUserLanguage())
    }, [])

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