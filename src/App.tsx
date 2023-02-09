import React, {useEffect} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import axios, {AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";
import Router from "./router/Router";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
            axios.get(
                process.env.REACT_APP_API_LOGIN as string,
                {
                    withCredentials: true
                }
            )
                .then((res: AxiosResponse) => {
                    if (res.status === 200) {
                        // history.push("/todos");
                        navigate('/todos');
                        return;
                    }
                })
        }
        , [])

    return (
        <Provider store={store}>
            <div className="App">
                <Router/>
            </div>
        </Provider>
    );
}

export default App;
