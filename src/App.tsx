import React, {useEffect} from 'react';
import './App.css';
import {useNavigate} from "react-router-dom";
import useSWR from 'swr'
import LoaderFullScreen from "./components/UI/loader/LoaderFullScreen";
import {useDispatch} from "react-redux";
import Router from "./router/Router";
import {setTodosAction} from "./redux/reducer/todoReducer";
import {useTypedSelector} from "./hooks/useTypedSelect";

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {error} = useTypedSelector(state => state.todos)
    const {
        data,
        isLoading
    } = useSWR(process.env.REACT_APP_API_LOGIN as string, (...args) => fetch(...args, {credentials: 'include'}));

    useEffect(() => {
        dispatch(setTodosAction([]));
        if (data?.status === 200)
            navigate("/todos");
    }, [isLoading, error]);

    if (isLoading) return <LoaderFullScreen/>;
    return (
        <div className="App bg-coolWhite w-screen h-screen">
            <Router/>
        </div>
    );
}

export default App;
