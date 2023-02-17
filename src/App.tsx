import React, {useEffect} from 'react';
import './App.css';
import {useNavigate} from "react-router-dom";
import useSWR from 'swr'
import LoaderFullScreen from "./components/UI/loader/LoaderFullScreen";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import Router from "./router/Router";

function App() {
    const navigate = useNavigate();

    const {
        data,
        isLoading
    } = useSWR(process.env.REACT_APP_API_LOGIN as string, (...args) => fetch(...args, {credentials: 'include'}));

    useEffect(() => {
        if (data?.status === 200)
            navigate("/todos");
    }, [isLoading]);

    if (isLoading) return <LoaderFullScreen/>;
    return (
        <Provider store={store}>
            <div className="App">
                <Router/>
            </div>
        </Provider>
    );
}

export default App;
