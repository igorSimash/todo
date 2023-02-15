import React, {useEffect} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {useNavigate} from "react-router-dom";
import Router from "./router/Router";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
            fetch(process.env.REACT_APP_API_LOGIN as string,
                {
                    credentials: 'include'
                })
                .then((res: Response) => {
                    if (res.status === 200) {
                        navigate('/todos');
                        return;
                    }
                });
        }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <Router/>
            </div>
        </Provider>
    );
}

export default App;
