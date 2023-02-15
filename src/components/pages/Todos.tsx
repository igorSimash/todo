import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeLanguageAction} from "../../redux/reducer/LanguageReducer";

const Todos:React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_TODO as string,
            {
                credentials: 'include'
            })
            .then((res: Response) => {
                if (!res.ok)
                    return Promise.reject();
                return res.json()
            })
            .then((data: {language: string}) => dispatch(changeLanguageAction(data.language)))
            .catch(() => navigate('/login'));
    }, []);

    const handleLogout = () => {
        fetch(process.env.REACT_APP_API_LOGOUT as string,
            {
                credentials: 'include'
            })
            .then((res) => {
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