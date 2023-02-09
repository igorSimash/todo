import React, {useEffect} from 'react';
import axios, {AxiosError, AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeLanguageAction} from "../../redux/reducer/LanguageReducer";

const Todos:React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_TODO as string, {withCredentials: true})
            .then((res: AxiosResponse) => {
                dispatch(changeLanguageAction(res.data.language))
            })
            .catch((err: AxiosError) => {
                if (err.response?.status) {
                    navigate('/login')
                }
            })
    }, []);

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
    };

    return (
        <div>
            Todos
            <button onClick={handleLogout}>EXIT</button>
        </div>
    );
};

export default Todos;