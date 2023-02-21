import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../../redux/action-creators/fetchTodos";
import {useTypedSelector} from "../../../hooks/useTypedSelect";

const Todos: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, todos, error} = useTypedSelector(state => state.todos)
    useEffect(() => {
        dispatch(fetchTodos());
        if (error === 'Session expired') navigate('/login');
        else navigate('/todos')
    }, [error]);

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
            <Link to={'/todos/change-pass'}> CHANGE PASSWORD</Link>
        </div>
    );
};

export default Todos;