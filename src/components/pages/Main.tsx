import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios, {AxiosResponse} from "axios";

const Main = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(
            process.env.REACT_APP_API_LOGIN as string,
            {
                withCredentials: true
            }
        )
            .then((res:AxiosResponse) => {
                if (res.status === 200) {
                    navigate("/todos");
                }
            })
    }, [])

    return (
        <div className={'w-screen h-screen px-10'}>
            <header className={'w-full h-16 flex justify-between'}>
                <div>

                </div>
                <div className={'flex gap-4'}>
                    <Link to={'/login'} className={''}>Sign in</Link>
                    <Link to={'/registration/start'} className={'bg-blue-400 h-2/3'}>Sign up</Link>
                </div>
            </header>

            <main>

            </main>
        </div>
    );
};

export default Main;