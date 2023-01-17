import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <RouterProvider router={router}/>
            </div>
        </Provider>
    );
}

export default App;
